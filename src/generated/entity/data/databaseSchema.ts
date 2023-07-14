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
 * This schema defines the Database Schema entity. A `Database Schema` is collection of
 * tables, views, stored procedures, and other database objects.
 */
export interface DatabaseSchema {
    /**
     * Change that lead to this version of the entity.
     */
    changeDescription?: ChangeDescription;
    /**
     * Reference to Database that contains this table.
     */
    database: EntityReference;
    /**
     * When `true` indicates the entity has been soft deleted.
     */
    deleted?: boolean;
    /**
     * Description of the schema instance.
     */
    description?: string;
    /**
     * Display Name that identifies this schema.
     */
    displayName?: string;
    /**
     * Name that uniquely identifies a schema in the format
     * 'ServiceName.DatabaseName.SchemaName'.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the resource corresponding to this entity.
     */
    href?: string;
    /**
     * Unique identifier that identifies this schema instance.
     */
    id?: string;
    /**
     * Name that identifies the schema.
     */
    name: string;
    /**
     * Owner of this schema.
     */
    owner?: EntityReference;
    /**
     * Link to the database cluster/service where this schema is hosted in.
     */
    service: EntityReference;
    /**
     * Service type where this schema is hosted in.
     */
    serviceType?: DatabaseServiceType;
    /**
     * References to tables in the schema.
     */
    tables?: EntityReference[];
    /**
     * Tags for this Database Schema Service.
     */
    tags?: TagLabel[];
    /**
     * Last update time corresponding to the new version of the entity in Unix epoch time
     * milliseconds.
     */
    updatedAt?: number;
    /**
     * User who made the update.
     */
    updatedBy?: string;
    /**
     * Latest usage information for this database.
     */
    usageSummary?: UsageDetails;
    /**
     * Metadata version of the entity.
     */
    version?: number;
}

/**
 * Change that lead to this version of the entity.
 *
 * Description of the change.
 */
export interface ChangeDescription {
    /**
     * Names of fields added during the version changes.
     */
    fieldsAdded?: FieldChange[];
    /**
     * Fields deleted during the version changes with old value before deleted.
     */
    fieldsDeleted?: FieldChange[];
    /**
     * Fields modified during the version changes with old and new values.
     */
    fieldsUpdated?: FieldChange[];
    /**
     * When a change did not result in change, this could be same as the current version.
     */
    previousVersion?: number;
}

export interface FieldChange {
    /**
     * Name of the entity field that changed.
     */
    name?: string;
    /**
     * New value of the field. Note that this is a JSON string and use the corresponding field
     * type to deserialize it.
     */
    newValue?: any;
    /**
     * Previous value of the field. Note that this is a JSON string and use the corresponding
     * field type to deserialize it.
     */
    oldValue?: any;
}

/**
 * Reference to Database that contains this table.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Owner of this schema.
 *
 * Link to the database cluster/service where this schema is hosted in.
 *
 * References to tables in the schema.
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
 * Service type where this schema is hosted in.
 *
 * Type of database service such as MySQL, BigQuery, Snowflake, Redshift, Postgres...
 */
export enum DatabaseServiceType {
    Athena = "Athena",
    AzureSQL = "AzureSQL",
    BigQuery = "BigQuery",
    Clickhouse = "Clickhouse",
    CustomDatabase = "CustomDatabase",
    Databricks = "Databricks",
    Datalake = "Datalake",
    Db2 = "Db2",
    Dbt = "Dbt",
    DeltaLake = "DeltaLake",
    DomoDatabase = "DomoDatabase",
    Druid = "Druid",
    DynamoDB = "DynamoDB",
    ExcelData = "ExcelData",
    Glue = "Glue",
    Hive = "Hive",
    Impala = "Impala",
    MariaDB = "MariaDB",
    Mssql = "Mssql",
    Mysql = "Mysql",
    Oracle = "Oracle",
    PinotDB = "PinotDB",
    Postgres = "Postgres",
    Presto = "Presto",
    QueryLog = "QueryLog",
    Redshift = "Redshift",
    SQLite = "SQLite",
    Salesforce = "Salesforce",
    SingleStore = "SingleStore",
    Snowflake = "Snowflake",
    Trino = "Trino",
    Vertica = "Vertica",
}

/**
 * This schema defines the type for labeling an entity with a Tag.
 */
export interface TagLabel {
    /**
     * Description for the tag label.
     */
    description?: string;
    /**
     * Link to the tag resource.
     */
    href?: string;
    /**
     * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
     * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
     * relationship (see Classification.json for more details). 'Propagated` indicates a tag
     * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
     * used to determine the tag label.
     */
    labelType: LabelType;
    /**
     * Label is from Tags or Glossary.
     */
    source: TagSource;
    /**
     * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
     * entity must confirm the suggested labels before it is marked as 'Confirmed'.
     */
    state:  State;
    tagFQN: string;
}

/**
 * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
 * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
 * relationship (see Classification.json for more details). 'Propagated` indicates a tag
 * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
 * used to determine the tag label.
 */
export enum LabelType {
    Automated = "Automated",
    Derived = "Derived",
    Manual = "Manual",
    Propagated = "Propagated",
}

/**
 * Label is from Tags or Glossary.
 */
export enum TagSource {
    Classification = "Classification",
    Glossary = "Glossary",
}

/**
 * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
 * entity must confirm the suggested labels before it is marked as 'Confirmed'.
 */
export enum State {
    Confirmed = "Confirmed",
    Suggested = "Suggested",
}

/**
 * Latest usage information for this database.
 *
 * This schema defines the type for usage details. Daily, weekly, and monthly aggregation of
 * usage is computed along with the percentile rank based on the usage for a given day.
 */
export interface UsageDetails {
    /**
     * Daily usage stats of a data asset on the start date.
     */
    dailyStats: UsageStats;
    /**
     * Date in UTC.
     */
    date: Date;
    /**
     * Monthly (last 30 days) rolling usage stats of a data asset on the start date.
     */
    monthlyStats?: UsageStats;
    /**
     * Weekly (last 7 days) rolling usage stats of a data asset on the start date.
     */
    weeklyStats?: UsageStats;
}

/**
 * Daily usage stats of a data asset on the start date.
 *
 * Type used to return usage statistics.
 *
 * Monthly (last 30 days) rolling usage stats of a data asset on the start date.
 *
 * Weekly (last 7 days) rolling usage stats of a data asset on the start date.
 */
export interface UsageStats {
    /**
     * Usage count of a data asset on the start date.
     */
    count: number;
    /**
     * Optional daily percentile rank data asset use when relevant.
     */
    percentileRank?: number;
}
