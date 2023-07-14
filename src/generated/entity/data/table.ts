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
 * A `Table` entity organizes data in rows and columns and is defined in a `Database Schema`.
 */
export interface Table {
    /**
     * Business data steward
     */
    businessDataSteward?: string;
    /**
     * Change that lead to this version of the entity.
     */
    changeDescription?: ChangeDescription;
    /**
     * Columns in this table.
     */
    columns: Column[];
    /**
     * Time of creation
     */
    createdAt?: string;
    /**
     * Reference to Database that contains this table.
     */
    database?: EntityReference;
    /**
     * Reference to database schema that contains this table.
     */
    databaseSchema?: EntityReference;
    /**
     * Domain of column
     */
    dataDomain?: string;
    /**
     * This captures information about how the table is modeled. Currently only DBT model is
     * supported.
     */
    dataModel?: DataModel;
    /**
     * Owner of data
     */
    dataOwner?: string;
    /**
     * When `true` indicates the entity has been soft deleted.
     */
    deleted?: boolean;
    /**
     * Description of a table.
     */
    description?: string;
    /**
     * Display Name that identifies this table. It could be title or label from the source
     * services.
     */
    displayName?: string;
    /**
     * Entity extension data with custom attributes added to the entity.
     */
    extension?: any;
    /**
     * Followers of this table.
     */
    followers?: EntityReference[];
    /**
     * Fully qualified name of a table in the form `serviceName.databaseName.tableName`.
     */
    fullyQualifiedName?: string;
    /**
     * Link to this table resource.
     */
    href?: string;
    /**
     * Unique identifier of this table instance.
     */
    id: string;
    /**
     * Details of other tables this table is frequently joined with.
     */
    joins?: TableJoins;
    /**
     * Time of last update
     */
    lastUpdate?: string;
    /**
     * Reference to the Location that contains this table.
     */
    location?: EntityReference;
    /**
     * Name of a table. Expected to be unique within a database.
     */
    name: string;
    /**
     * Owner of this table.
     */
    owner?: EntityReference;
    /**
     * Latest Data profile for a table.
     */
    profile?: TableProfile;
    /**
     * Sample data for a table.
     */
    sampleData?: TableData;
    /**
     * Link to Database service this table is hosted in.
     */
    service?: EntityReference;
    /**
     * Service type this table is hosted in.
     */
    serviceType?: DatabaseServiceType;
    /**
     * Table constraints.
     */
    tableConstraints?: TableConstraint[];
    tablePartition?:   TablePartition;
    /**
     * Table Profiler Config to include or exclude columns from profiling.
     */
    tableProfilerConfig?: TableProfilerConfig;
    tableType?:           TableType;
    /**
     * Tags for this table.
     */
    tags?: TagLabel[];
    /**
     * Technical data steward
     */
    technicalDataSteward?: string;
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
     * Update interval in day
     */
    updateInterval?: string;
    /**
     * Latest usage information for this table.
     */
    usageSummary?: UsageDetails;
    /**
     * Metadata version of the entity.
     */
    version?: number;
    /**
     * View Definition in SQL. Applies to TableType.View only.
     */
    viewDefinition?: string;
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
 * This schema defines the type for a column in a table.
 */
export interface Column {
    /**
     * Data type used array in dataType. For example, `array<int>` has dataType as `array` and
     * arrayDataType as `int`.
     */
    arrayDataType?: DataType;
    /**
     * How to generate column data
     */
    calculationMethod?: string;
    /**
     * Child columns if dataType or arrayDataType is `map`, `struct`, or `union` else `null`.
     */
    children?: Column[];
    /**
     * Column level constraint.
     */
    constraint?: Constraint;
    /**
     * List of Custom Metrics registered for a column.
     */
    customMetrics?: CustomMetric[];
    /**
     * Length of `char`, `varchar`, `binary`, `varbinary` `dataTypes`, else null. For example,
     * `varchar(20)` has dataType as `varchar` and dataLength as `20`.
     */
    dataLength?: number;
    /**
     * Data type of the column (int, date etc.).
     */
    dataType: DataType;
    /**
     * Display name used for dataType. This is useful for complex types, such as `array<int>`,
     * `map<int,string>`, `struct<>`, and union types.
     */
    dataTypeDisplay?: string;
    /**
     * Description of the column.
     */
    description?: string;
    /**
     * Display Name that identifies this column name.
     */
    displayName?: string;
    /**
     * Title of column in english
     */
    englishTitle?:       string;
    fullyQualifiedName?: string;
    /**
     * Json schema only if the dataType is JSON else null.
     */
    jsonSchema?: string;
    name:        string;
    /**
     * Ordinal position of the column.
     */
    ordinalPosition?: number;
    /**
     * Title of column in persian
     */
    persianTitle?: string;
    /**
     * The precision of a numeric is the total count of significant digits in the whole number,
     * that is, the number of digits to both sides of the decimal point. Precision is applicable
     * Integer types, such as `INT`, `SMALLINT`, `BIGINT`, etc. It also applies to other Numeric
     * types, such as `NUMBER`, `DECIMAL`, `DOUBLE`, `FLOAT`, etc.
     */
    precision?: number;
    /**
     * Latest Data profile for a Column.
     */
    profile?: ColumnProfile;
    /**
     * Related terms
     */
    relatedTerms?: string;
    /**
     * The scale of a numeric is the count of decimal digits in the fractional part, to the
     * right of the decimal point. For Integer types, the scale is `0`. It mainly applies to non
     * Integer Numeric types, such as `NUMBER`, `DECIMAL`, `DOUBLE`, `FLOAT`, etc.
     */
    scale?: number;
    /**
     * Tags associated with the column.
     */
    tags?: TagLabel[];
}

/**
 * Data type used array in dataType. For example, `array<int>` has dataType as `array` and
 * arrayDataType as `int`.
 *
 * This enum defines the type of data stored in a column.
 *
 * Data type of the column (int, date etc.).
 */
export enum DataType {
    Aggregatefunction = "AGGREGATEFUNCTION",
    Array = "ARRAY",
    Bigint = "BIGINT",
    Binary = "BINARY",
    Blob = "BLOB",
    Boolean = "BOOLEAN",
    Bytea = "BYTEA",
    Byteint = "BYTEINT",
    Bytes = "BYTES",
    CIDR = "CIDR",
    Char = "CHAR",
    Clob = "CLOB",
    Date = "DATE",
    Datetime = "DATETIME",
    Decimal = "DECIMAL",
    Double = "DOUBLE",
    Enum = "ENUM",
    Error = "ERROR",
    Fixed = "FIXED",
    Float = "FLOAT",
    Geography = "GEOGRAPHY",
    Geometry = "GEOMETRY",
    Hllsketch = "HLLSKETCH",
    Inet = "INET",
    Int = "INT",
    Interval = "INTERVAL",
    JSON = "JSON",
    Long = "LONG",
    Longblob = "LONGBLOB",
    Lowcardinality = "LOWCARDINALITY",
    Macaddr = "MACADDR",
    Map = "MAP",
    Mediumblob = "MEDIUMBLOB",
    Mediumtext = "MEDIUMTEXT",
    Null = "NULL",
    Number = "NUMBER",
    Numeric = "NUMERIC",
    PGLsn = "PG_LSN",
    PGSnapshot = "PG_SNAPSHOT",
    Point = "POINT",
    Polygon = "POLYGON",
    Record = "RECORD",
    Rowid = "ROWID",
    Set = "SET",
    Smallint = "SMALLINT",
    Spatial = "SPATIAL",
    String = "STRING",
    Struct = "STRUCT",
    Super = "SUPER",
    Table = "TABLE",
    Text = "TEXT",
    Time = "TIME",
    Timestamp = "TIMESTAMP",
    Timestampz = "TIMESTAMPZ",
    Tinyint = "TINYINT",
    Tsquery = "TSQUERY",
    Tsvector = "TSVECTOR",
    Tuple = "TUPLE",
    TxidSnapshot = "TXID_SNAPSHOT",
    UUID = "UUID",
    Union = "UNION",
    Unknown = "UNKNOWN",
    Varbinary = "VARBINARY",
    Varchar = "VARCHAR",
    Variant = "VARIANT",
    XML = "XML",
    Year = "YEAR",
}

/**
 * Column level constraint.
 *
 * This enum defines the type for column constraint.
 */
export enum Constraint {
    NotNull = "NOT_NULL",
    Null = "NULL",
    PrimaryKey = "PRIMARY_KEY",
    Unique = "UNIQUE",
}

/**
 * Custom Metric definition that we will associate with a column.
 */
export interface CustomMetric {
    /**
     * Name of the column in a table.
     */
    columnName: string;
    /**
     * Description of the Metric.
     */
    description?: string;
    /**
     * SQL expression to compute the Metric. It should return a single numerical value.
     */
    expression: string;
    /**
     * Unique identifier of this Custom Metric instance.
     */
    id?: string;
    /**
     * Name that identifies this Custom Metric.
     */
    name: string;
    /**
     * Owner of this Custom Metric.
     */
    owner?: EntityReference;
    /**
     * Last update time corresponding to the new version of the entity in Unix epoch time
     * milliseconds.
     */
    updatedAt?: number;
    /**
     * User who made the update.
     */
    updatedBy?: string;
}

/**
 * Owner of this Custom Metric.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Reference to Database that contains this table.
 *
 * Reference to database schema that contains this table.
 *
 * Owner of this Model.
 *
 * Followers of this table.
 *
 * Reference to the Location that contains this table.
 *
 * Owner of this table.
 *
 * Link to Database service this table is hosted in.
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
 * Latest Data profile for a Column.
 *
 * This schema defines the type to capture the table's column profile.
 */
export interface ColumnProfile {
    /**
     * Custom Metrics profile list bound to a column.
     */
    customMetricsProfile?: CustomMetricProfile[];
    /**
     * Number of values that contain distinct values.
     */
    distinctCount?: number;
    /**
     * Proportion of distinct values in a column.
     */
    distinctProportion?: number;
    /**
     * No.of Rows that contain duplicates in a column.
     */
    duplicateCount?: number;
    /**
     * First quartile of a column.
     */
    firstQuartile?: number;
    /**
     * Histogram of a column.
     */
    histogram?: any[] | boolean | HistogramClass | number | number | null | string;
    /**
     * Inter quartile range of a column.
     */
    interQuartileRange?: number;
    /**
     * Maximum value in a column.
     */
    max?: number | string;
    /**
     * Maximum string length in a column.
     */
    maxLength?: number;
    /**
     * Avg value in a column.
     */
    mean?: number;
    /**
     * Median of a column.
     */
    median?: number;
    /**
     * Minimum value in a column.
     */
    min?: number | string;
    /**
     * Minimum string length in a column.
     */
    minLength?: number;
    /**
     * Missing count is calculated by subtracting valuesCount - validCount.
     */
    missingCount?: number;
    /**
     * Missing Percentage is calculated by taking percentage of validCount/valuesCount.
     */
    missingPercentage?: number;
    /**
     * Column Name.
     */
    name: string;
    /**
     * Non parametric skew of a column.
     */
    nonParametricSkew?: number;
    /**
     * No.of null values in a column.
     */
    nullCount?: number;
    /**
     * No.of null value proportion in columns.
     */
    nullProportion?: number;
    /**
     * Standard deviation of a column.
     */
    stddev?: number;
    /**
     * Median value in a column.
     */
    sum?: number;
    /**
     * First quartile of a column.
     */
    thirdQuartile?: number;
    /**
     * Timestamp on which profile is taken.
     */
    timestamp: number;
    /**
     * No. of unique values in the column.
     */
    uniqueCount?: number;
    /**
     * Proportion of number of unique values in a column.
     */
    uniqueProportion?: number;
    /**
     * Total count of valid values in this column.
     */
    validCount?: number;
    /**
     * Total count of the values in this column.
     */
    valuesCount?: number;
    /**
     * Percentage of values in this column with respect to row count.
     */
    valuesPercentage?: number;
    /**
     * Variance of a column.
     */
    variance?: number;
}

/**
 * Profiling results of a Custom Metric.
 */
export interface CustomMetricProfile {
    /**
     * Custom metric name.
     */
    name?: string;
    /**
     * Profiling results for the metric.
     */
    value?: number;
}

export interface HistogramClass {
    /**
     * Boundaries of Histogram.
     */
    boundaries?: any[];
    /**
     * Frequencies of Histogram.
     */
    frequencies?: any[];
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
 * This captures information about how the table is modeled. Currently only DBT model is
 * supported.
 */
export interface DataModel {
    /**
     * Columns from the schema defined during modeling. In case of DBT, the metadata here comes
     * from `schema.yaml`.
     */
    columns?: Column[];
    /**
     * Description of the Table from the model.
     */
    description?: string;
    generatedAt?: Date;
    modelType:    ModelType;
    /**
     * Owner of this Model.
     */
    owner?: EntityReference;
    /**
     * Path to sql definition file.
     */
    path?: string;
    /**
     * This corresponds to rws SQL from `<model_name>.sql` in DBT. This might be null when SQL
     * query need not be compiled as done in DBT.
     */
    rawSql?: string;
    /**
     * This corresponds to compile SQL from `<model_name>.sql` in DBT. In cases where
     * compilation is not necessary, this corresponds to SQL that created the table.
     */
    sql: string;
    /**
     * Tags for this data model.
     */
    tags?: TagLabel[];
    /**
     * Fully qualified name of Models/tables used for in `sql` for creating this table.
     */
    upstream?: string[];
}

export enum ModelType {
    Dbt = "DBT",
}

/**
 * Details of other tables this table is frequently joined with.
 *
 * This schema defines the type to capture information about how this table is joined with
 * other tables and columns.
 */
export interface TableJoins {
    columnJoins?: ColumnJoins[];
    dayCount?:    number;
    /**
     * Joins with other tables that are not on a specific column (e.g: UNION join)
     */
    directTableJoins?: JoinedWith[];
    /**
     * Date can be only from today going back to last 29 days.
     */
    startDate?: Date;
}

/**
 * This schema defines the type to capture how frequently a column is joined with columns in
 * the other tables.
 */
export interface ColumnJoins {
    columnName?: string;
    /**
     * Fully qualified names of the columns that this column is joined with.
     */
    joinedWith?: JoinedWith[];
}

/**
 * Fully qualified names of the fields/entities that this field/entity is joined with.
 */
export interface JoinedWith {
    fullyQualifiedName: string;
    joinCount:          number;
}

/**
 * Latest Data profile for a table.
 *
 * This schema defines the type to capture the table's data profile.
 */
export interface TableProfile {
    /**
     * No.of columns in the table.
     */
    columnCount?: number;
    /**
     * Percentage of data or no. of rows we want to execute the profiler and tests on
     */
    profileSample?:     number;
    profileSampleType?: ProfileSampleType;
    /**
     * No.of rows in the table. This is always executed on the whole table.
     */
    rowCount?: number;
    /**
     * Timestamp on which profile is taken.
     */
    timestamp: number;
}

/**
 * Type of Profile Sample (percentage or rows)
 */
export enum ProfileSampleType {
    Percentage = "PERCENTAGE",
    Rows = "ROWS",
}

/**
 * Sample data for a table.
 *
 * This schema defines the type to capture rows of sample data for a table.
 */
export interface TableData {
    /**
     * List of local column names (not fully qualified column names) of the table.
     */
    columns?: string[];
    /**
     * Data for multiple rows of the table.
     */
    rows?: Array<any[]>;
}

/**
 * Service type this table is hosted in.
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
 * This enum defines the type for table constraint.
 */
export interface TableConstraint {
    /**
     * List of column names corresponding to the constraint.
     */
    columns?:        string[];
    constraintType?: ConstraintType;
    /**
     * List of referred columns for the constraint.
     */
    referredColumns?: string[];
}

export enum ConstraintType {
    DistKey = "DIST_KEY",
    ForeignKey = "FOREIGN_KEY",
    PrimaryKey = "PRIMARY_KEY",
    SortKey = "SORT_KEY",
    Unique = "UNIQUE",
}

/**
 * This schema defines the partition column of a table and format the partition is created.
 */
export interface TablePartition {
    /**
     * List of column names corresponding to the partition.
     */
    columns?: string[];
    /**
     * partition interval , example hourly, daily, monthly.
     */
    interval?: string;
    /**
     * type of partition interval, example time-unit, integer-range
     */
    intervalType?: IntervalType;
}

/**
 * type of partition interval, example time-unit, integer-range
 */
export enum IntervalType {
    ColumnValue = "COLUMN-VALUE",
    IngestionTime = "INGESTION-TIME",
    IntegerRange = "INTEGER-RANGE",
    Other = "OTHER",
    TimeUnit = "TIME-UNIT",
}

/**
 * Table Profiler Config to include or exclude columns from profiling.
 *
 * This schema defines the type for Table profile config.
 */
export interface TableProfilerConfig {
    /**
     * column names to exclude from profiling.
     */
    excludeColumns?: string[];
    /**
     * Only run profiler on included columns with specific metrics.
     */
    includeColumns?: ColumnProfilerConfig[];
    /**
     * Partitioning configuration
     */
    partitioning?: PartitionProfilerConfig;
    /**
     * Users' raw SQL query to fetch sample data and profile the table
     */
    profileQuery?: string;
    /**
     * Percentage of data or no. of rows we want to execute the profiler and tests on
     */
    profileSample?:     number;
    profileSampleType?: ProfileSampleType;
}

/**
 * This schema defines the type for Table profile config include Columns.
 */
export interface ColumnProfilerConfig {
    /**
     * Column Name of the table to be included.
     */
    columnName?: string;
    /**
     * Include only following metrics.
     */
    metrics?: string[];
}

/**
 * Partitioning configuration
 *
 * This schema defines the partition configuration used by profiler.
 */
export interface PartitionProfilerConfig {
    /**
     * whether to use partition
     */
    enablePartitioning?: boolean;
    /**
     * name of the column to use for the partition
     */
    partitionColumnName?: string;
    /**
     * end of the integer range for partitioning
     */
    partitionIntegerRangeEnd?: number;
    /**
     * start of the integer range for partitioning
     */
    partitionIntegerRangeStart?: number;
    /**
     * The interval to use for the partitioning
     */
    partitionInterval?: number;
    /**
     * type of partition interval
     */
    partitionIntervalType?: PartitionIntervalType;
    /**
     * unit used for the partition interval
     */
    partitionIntervalUnit?: PartitionIntervalUnit;
    /**
     * unit used for the partition interval
     */
    partitionValues?: any[];
}

/**
 * type of partition interval
 */
export enum PartitionIntervalType {
    ColumnValue = "COLUMN-VALUE",
    IngestionTime = "INGESTION-TIME",
    IntegerRange = "INTEGER-RANGE",
    TimeUnit = "TIME-UNIT",
}

/**
 * unit used for the partition interval
 */
export enum PartitionIntervalUnit {
    Day = "DAY",
    Hour = "HOUR",
    Month = "MONTH",
    Year = "YEAR",
}

/**
 * This schema defines the type used for describing different types of tables.
 */
export enum TableType {
    External = "External",
    Foreign = "Foreign",
    Iceberg = "Iceberg",
    Local = "Local",
    MaterializedView = "MaterializedView",
    Partitioned = "Partitioned",
    Regular = "Regular",
    SecureView = "SecureView",
    View = "View",
}

/**
 * Latest usage information for this table.
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
