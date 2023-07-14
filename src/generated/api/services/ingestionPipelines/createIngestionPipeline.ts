/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

 /**
 * Ingestion Pipeline Config is used to setup a Airflow DAG.
 */
export interface CreateIngestionPipeline {
    airflowConfig: AirflowConfig;
    /**
     * Description of the pipeline.
     */
    description?: string;
    /**
     * Display Name that identifies this ingestion pipeline.
     */
    displayName?: string;
    /**
     * Set the logging level for the workflow.
     */
    loggerLevel?: LogLevels;
    /**
     * Name that identifies this pipeline instance uniquely.
     */
    name: string;
    /**
     * Owner of this Pipeline.
     */
    owner?:       EntityReference;
    pipelineType: PipelineType;
    /**
     * Link to the service for which ingestion pipeline is ingesting the metadata.
     */
    service:      EntityReference;
    sourceConfig: SourceConfig;
}

/**
 * Properties to configure the Airflow pipeline that will run the workflow.
 */
export interface AirflowConfig {
    /**
     * Concurrency of the Pipeline.
     */
    concurrency?: number;
    /**
     * Email to notify workflow status.
     */
    email?: string;
    /**
     * End Date of the pipeline.
     */
    endDate?: Date;
    /**
     * Maximum Number of active runs.
     */
    maxActiveRuns?: number;
    /**
     * pause the pipeline from running once the deploy is finished successfully.
     */
    pausePipeline?: boolean;
    /**
     * Run past executions if the start date is in the past.
     */
    pipelineCatchup?: boolean;
    /**
     * Timezone in which pipeline going to be scheduled.
     */
    pipelineTimezone?: string;
    /**
     * Retry pipeline in case of failure.
     */
    retries?: number;
    /**
     * Delay between retries in seconds.
     */
    retryDelay?: number;
    /**
     * Scheduler Interval for the pipeline in cron format.
     */
    scheduleInterval?: string;
    /**
     * Start date of the pipeline.
     */
    startDate?: Date;
    /**
     * Default view in Airflow.
     */
    workflowDefaultView?: string;
    /**
     * Default view Orientation in Airflow.
     */
    workflowDefaultViewOrientation?: string;
    /**
     * Timeout for the workflow in seconds.
     */
    workflowTimeout?: number;
}

/**
 * Set the logging level for the workflow.
 *
 * Supported logging levels
 */
export enum LogLevels {
    Debug = "DEBUG",
    Error = "ERROR",
    Info = "INFO",
    Warn = "WARN",
}

/**
 * Owner of this Pipeline.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Link to the service for which ingestion pipeline is ingesting the metadata.
 */
export interface EntityReference {
    /**
     * If true the entity referred to has been soft-deleted.
     */
    deleted?: boolean;
    /**
     * Optional description of entity.
     */
    description?: string;
    /**
     * Display Name that identifies this entity.
     */
    displayName?: string;
    /**
     * Fully qualified name of the entity instance. For entities such as tables, databases
     * fullyQualifiedName is returned in this field. For entities that don't have name hierarchy
     * such as `user` and `team` this will be same as the `name` field.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the entity resource.
     */
    href?: string;
    /**
     * Unique identifier that identifies an entity instance.
     */
    id: string;
    /**
     * Name of the entity instance.
     */
    name?: string;
    /**
     * Entity type/class name - Examples: `database`, `table`, `metrics`, `databaseService`,
     * `dashboardService`...
     */
    type: string;
}

/**
 * Type of Pipeline - metadata, usage
 */
export enum PipelineType {
    DataInsight = "dataInsight",
    Dbt = "dbt",
    ElasticSearchReindex = "elasticSearchReindex",
    Lineage = "lineage",
    Metadata = "metadata",
    Profiler = "profiler",
    TestSuite = "TestSuite",
    Usage = "usage",
}

/**
 * Additional connection configuration.
 */
export interface SourceConfig {
    config?: any[] | boolean | ConfigClass | number | null | string;
}

export interface ConfigClass {
    /**
     * Regex to only fetch databases that matches the pattern.
     */
    databaseFilterPattern?: FilterPattern;
    /**
     * Optional configuration to turn off fetching metadata for tables.
     */
    includeTables?: boolean;
    /**
     * Optional configuration to toggle the tags ingestion.
     */
    includeTags?: boolean;
    /**
     * Optional configuration to turn off fetching metadata for views.
     */
    includeViews?: boolean;
    /**
     * This is an optional configuration for enabling soft deletion of tables. When this option
     * is enabled, only tables that have been deleted from the source will be soft deleted, and
     * this will apply to all the schemas available in the data source. Any related entities
     * such as test suites or lineage information that were associated with those tables will
     * also be deleted. Do not enable this option when you have multiple metadata ingestion
     * pipelines. Also make sure to enable the markDeletedTables option for this to work.
     */
    markAllDeletedTables?: boolean;
    /**
     * This is an optional configuration for enabling soft deletion of tables. When this option
     * is enabled, only tables that have been deleted from the source will be soft deleted, and
     * this will apply solely to the schema that is currently being ingested via the pipeline.
     * Any related entities such as test suites or lineage information that were associated with
     * those tables will also be deleted.
     */
    markDeletedTables?: boolean;
    /**
     * Regex to only fetch tables or databases that matches the pattern.
     */
    schemaFilterPattern?: FilterPattern;
    /**
     * Regex exclude tables or databases that matches the pattern.
     */
    tableFilterPattern?: FilterPattern;
    /**
     * Pipeline type
     */
    type?: ConfigType;
    /**
     * Regex will be applied on fully qualified name (e.g
     * service_name.db_name.schema_name.table_name) instead of raw name (e.g. table_name)
     */
    useFqnForFiltering?: boolean;
    /**
     * Configuration to tune how far we want to look back in query logs to process usage data.
     *
     * Configuration to tune how far we want to look back in query logs to process lineage data.
     */
    queryLogDuration?: number;
    /**
     * Configuration to set the file path for query logs
     */
    queryLogFilePath?: string;
    /**
     * Configuration to set the limit for query logs
     */
    resultLimit?: number;
    /**
     * Temporary file name to store the query logs before processing. Absolute file path
     * required.
     */
    stageFileLocation?: string;
    /**
     * Regex exclude or include charts that matches the pattern.
     */
    chartFilterPattern?: FilterPattern;
    /**
     * Regex to exclude or include dashboards that matches the pattern.
     */
    dashboardFilterPattern?: FilterPattern;
    /**
     * Regex exclude or include data models that matches the pattern.
     */
    dataModelFilterPattern?: FilterPattern;
    /**
     * List of Database Service Names for creation of lineage
     */
    dbServiceNames?: any[];
    /**
     * Optional configuration to toggle the ingestion of data models.
     */
    includeDataModels?: boolean;
    /**
     * Enabling a flag will replace the current owner with a new owner from the source during
     * metadata ingestion, if the current owner is null. It is recommended to keep the flag
     * enabled to obtain the owner information during the first metadata ingestion.
     */
    includeOwners?: boolean;
    /**
     * Optional configuration to soft delete dashboards in OpenMetadata if the source dashboards
     * are deleted. Also, if the dashboard is deleted, all the associated entities like lineage,
     * etc., with that dashboard will be deleted
     */
    markDeletedDashboards?: boolean;
    /**
     * Option to turn on/off generating sample data during metadata extraction.
     *
     * Option to turn on/off generating sample data.
     */
    generateSampleData?: boolean;
    /**
     * Optional configuration to soft delete topics in OpenMetadata if the source topics are
     * deleted. Also, if the topic is deleted, all the associated entities like sample data,
     * lineage, etc., with that topic will be deleted
     */
    markDeletedTopics?: boolean;
    /**
     * Regex to only fetch topics that matches the pattern.
     */
    topicFilterPattern?: FilterPattern;
    /**
     * Set the Confidence value for which you want the column to be marked
     */
    confidence?: number;
    /**
     * Optional configuration to automatically tag columns that might contain sensitive
     * information
     */
    processPiiSensitive?: boolean;
    /**
     * Percentage of data or no. of rows we want to execute the profiler and tests on
     */
    profileSample?:     number;
    profileSampleType?: ProfileSampleType;
    /**
     * Number of threads to use during metric computations
     */
    threadCount?: number;
    /**
     * Profiler Timeout in Seconds
     */
    timeoutSeconds?: number;
    /**
     * Optional configuration to turn off fetching lineage from pipelines.
     */
    includeLineage?: boolean;
    /**
     * Optional configuration to soft delete Pipelines in OpenMetadata if the source Pipelines
     * are deleted. Also, if the Pipeline is deleted, all the associated entities like lineage,
     * etc., with that Pipeline will be deleted
     */
    markDeletedPipelines?: boolean;
    /**
     * Regex exclude pipelines.
     */
    pipelineFilterPattern?: FilterPattern;
    /**
     * Optional configuration to soft delete MlModels in OpenMetadata if the source MlModels are
     * deleted. Also, if the MlModel is deleted, all the associated entities like lineage, etc.,
     * with that MlModels will be deleted
     */
    markDeletedMlModels?: boolean;
    /**
     * Regex to only fetch MlModels with names matching the pattern.
     */
    mlModelFilterPattern?: FilterPattern;
    /**
     * Regex to only fetch containers that matches the pattern.
     */
    containerFilterPattern?: FilterPattern;
    /**
     * Certificate path to be added in configuration. The path should be local in the Ingestion
     * Container.
     */
    caCerts?: string;
    /**
     * Region name. Required when using AWS Credentials.
     */
    regionName?: string;
    /**
     * Connection Timeout
     */
    timeout?: number;
    /**
     * Indicates whether to use aws credentials when connecting to OpenSearch in AWS.
     */
    useAwsCredentials?: boolean;
    /**
     * Indicates whether to use SSL when connecting to ElasticSearch. By default, we will ignore
     * SSL settings.
     */
    useSSL?: boolean;
    /**
     * Indicates whether to verify certificates when using SSL connection to ElasticSearch.
     * Ignored by default. Is set to true, make sure to send the certificates in the property
     * `CA Certificates`.
     */
    verifyCerts?: boolean;
    /**
     * Custom OpenMetadata Classification name for dbt tags.
     */
    dbtClassificationName?: string;
    /**
     * Available sources to fetch DBT catalog and manifest files.
     */
    dbtConfigSource?: any[] | boolean | number | null | DbtConfig | string;
    /**
     * Optional configuration to update the description from DBT or not
     */
    dbtUpdateDescriptions?: boolean;
}

/**
 * Regex to only fetch databases that matches the pattern.
 *
 * Regex to only fetch dashboards or charts that matches the pattern.
 *
 * Regex to only fetch tables or databases that matches the pattern.
 *
 * Regex exclude tables or databases that matches the pattern.
 *
 * Regex exclude or include charts that matches the pattern.
 *
 * Regex to exclude or include dashboards that matches the pattern.
 *
 * Regex exclude or include data models that matches the pattern.
 *
 * Regex to only fetch topics that matches the pattern.
 *
 * Regex exclude pipelines.
 *
 * Regex to only fetch MlModels with names matching the pattern.
 *
 * Regex to only fetch containers that matches the pattern.
 */
export interface FilterPattern {
    /**
     * List of strings/regex patterns to match and exclude only database entities that match.
     */
    excludes?: string[];
    /**
     * List of strings/regex patterns to match and include only database entities that match.
     */
    includes?: string[];
}

/**
 * dbt Cloud configuration.
 *
 * DBT Catalog, Manifest and Run Results file path config.
 *
 * DBT Catalog, Manifest and Run Results HTTP path configuration.
 */
export interface DbtConfig {
    /**
     * dbt cloud account Id
     */
    dbtCloudAccountId?: string;
    /**
     * dbt cloud account authentication token
     */
    dbtCloudAuthToken?: string;
    /**
     * dbt cloud job id.
     */
    dbtCloudJobId?: string;
    /**
     * In case of multiple projects in a dbt cloud account, specify the project's id from which
     * you want to extract the dbt run artifacts
     */
    dbtCloudProjectId?: string;
    /**
     * URL to connect to your dbt cloud instance. E.g., https://cloud.getdbt.com or
     * https://emea.dbt.com/
     */
    dbtCloudUrl?: string;
    /**
     * DBT catalog file path to extract dbt models with their column schemas.
     */
    dbtCatalogFilePath?: string;
    /**
     * DBT manifest file path to extract dbt models and associate with tables.
     */
    dbtManifestFilePath?: string;
    /**
     * DBT run results file path to extract the test results information.
     */
    dbtRunResultsFilePath?: string;
    /**
     * DBT catalog http file path to extract dbt models with their column schemas.
     */
    dbtCatalogHttpPath?: string;
    /**
     * DBT manifest http file path to extract dbt models and associate with tables.
     */
    dbtManifestHttpPath?: string;
    /**
     * DBT run results http file path to extract the test results information.
     */
    dbtRunResultsHttpPath?: string;
    dbtPrefixConfig?:       DBTBucketDetails;
    dbtSecurityConfig?:     SCredentials;
}

/**
 * Details of the bucket where the dbt files are stored
 */
export interface DBTBucketDetails {
    /**
     * Name of the bucket where the dbt files are stored
     */
    dbtBucketName?: string;
    /**
     * Path of the folder where the dbt files are stored
     */
    dbtObjectPrefix?: string;
}

/**
 * AWS credentials configs.
 *
 * GCS credentials configs.
 */
export interface SCredentials {
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Required Field in case of Assume
     * Role
     */
    assumeRoleArn?: string;
    /**
     * An identifier for the assumed role session. Use the role session name to uniquely
     * identify a session when the same role is assumed by different principals or for different
     * reasons. Required Field in case of Assume Role
     */
    assumeRoleSessionName?: string;
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Optional Field in case of Assume
     * Role
     */
    assumeRoleSourceIdentity?: string;
    /**
     * AWS Access key ID.
     */
    awsAccessKeyId?: string;
    /**
     * AWS Region
     */
    awsRegion?: string;
    /**
     * AWS Secret Access Key.
     */
    awsSecretAccessKey?: string;
    /**
     * AWS Session Token.
     */
    awsSessionToken?: string;
    /**
     * EndPoint URL for the AWS
     */
    endPointURL?: string;
    /**
     * The name of a profile to use with the boto session.
     */
    profileName?: string;
    /**
     * We support two ways of authenticating to GCS i.e via GCS Credentials Values or GCS
     * Credentials Path
     */
    gcsConfig?: GCSCredentialsValues | string;
}

/**
 * Pass the raw credential values provided by GCS
 */
export interface GCSCredentialsValues {
    /**
     * Google Cloud auth provider certificate.
     */
    authProviderX509CertUrl?: string;
    /**
     * Google Cloud auth uri.
     */
    authUri?: string;
    /**
     * Google Cloud email.
     */
    clientEmail?: string;
    /**
     * Google Cloud Client ID.
     */
    clientId?: string;
    /**
     * Google Cloud client certificate uri.
     */
    clientX509CertUrl?: string;
    /**
     * Google Cloud private key.
     */
    privateKey?: string;
    /**
     * Google Cloud private key id.
     */
    privateKeyId?: string;
    /**
     * Project ID
     */
    projectId?: string[] | string;
    /**
     * Google Cloud token uri.
     */
    tokenUri?: string;
    /**
     * Google Cloud service account type.
     */
    type?: string;
}

/**
 * Type of Profile Sample (percentage or rows)
 */
export enum ProfileSampleType {
    Percentage = "PERCENTAGE",
    Rows = "ROWS",
}

/**
 * Pipeline type
 *
 * Database Source Config Metadata Pipeline type
 *
 * Database Source Config Usage Pipeline type
 *
 * Dashboard Source Config Metadata Pipeline type
 *
 * Messaging Source Config Metadata Pipeline type
 *
 * Profiler Source Config Pipeline type
 *
 * Pipeline Source Config Metadata Pipeline type
 *
 * MlModel Source Config Metadata Pipeline type
 *
 * Object Store Source Config Metadata Pipeline type
 *
 * DBT Config Pipeline type
 */
export enum ConfigType {
    DashboardMetadata = "DashboardMetadata",
    DataInsight = "dataInsight",
    DatabaseLineage = "DatabaseLineage",
    DatabaseMetadata = "DatabaseMetadata",
    DatabaseUsage = "DatabaseUsage",
    Dbt = "DBT",
    MessagingMetadata = "MessagingMetadata",
    MetadataToElasticSearch = "MetadataToElasticSearch",
    MlModelMetadata = "MlModelMetadata",
    PipelineMetadata = "PipelineMetadata",
    Profiler = "Profiler",
    StorageMetadata = "StorageMetadata",
    TestSuite = "TestSuite",
}
