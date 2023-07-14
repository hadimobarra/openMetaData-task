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
 * Test Definition is a type of test using which test cases are created to capture data
 * quality tests against data entities.
 */
export interface TestDefinition {
    /**
     * Change that lead to this version of the entity.
     */
    changeDescription?: ChangeDescription;
    /**
     * When `true` indicates the entity has been soft deleted.
     */
    deleted?: boolean;
    /**
     * Description of the testcase.
     */
    description: string;
    /**
     * Display Name that identifies this test case.
     */
    displayName?: string;
    entityType?:  EntityType;
    /**
     * FullyQualifiedName same as `name`.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the resource corresponding to this entity.
     */
    href?: string;
    /**
     * Unique identifier of this test case definition instance.
     */
    id?: string;
    /**
     * Name that identifies this test case.
     */
    name: string;
    /**
     * Owner of this TestCase definition.
     */
    owner?:               EntityReference;
    parameterDefinition?: TestCaseParameterDefinition[];
    supportedDataTypes?:  DataType[];
    testPlatforms:        TestPlatform[];
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
 * This enum defines the type for which this test definition applies to.
 */
export enum EntityType {
    Column = "COLUMN",
    Table = "TABLE",
}

/**
 * Owner of this TestCase definition.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
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
 * This schema defines the parameters that can be passed for a Test Case.
 */
export interface TestCaseParameterDefinition {
    /**
     * Data type of the parameter (int, date etc.).
     */
    dataType?: TestDataType;
    /**
     * Description of the parameter.
     */
    description?: string;
    /**
     * Display Name that identifies this parameter name.
     */
    displayName?: string;
    /**
     * name of the parameter.
     */
    name?: string;
    /**
     * Is this parameter required.
     */
    required?: boolean;
}

/**
 * Data type of the parameter (int, date etc.).
 *
 * This enum defines the type of data stored in a column.
 */
export enum TestDataType {
    Array = "ARRAY",
    Boolean = "BOOLEAN",
    Date = "DATE",
    Datetime = "DATETIME",
    Decimal = "DECIMAL",
    Double = "DOUBLE",
    Float = "FLOAT",
    Int = "INT",
    Map = "MAP",
    Number = "NUMBER",
    Set = "SET",
    String = "STRING",
    Time = "TIME",
    Timestamp = "TIMESTAMP",
}

/**
 * This enum defines the type of data stored in a column.
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
 * This schema defines the platform where tests are defined and ran.
 */
export enum TestPlatform {
    Dbt = "DBT",
    Deequ = "Deequ",
    GreatExpectations = "GreatExpectations",
    OpenMetadata = "OpenMetadata",
    Other = "Other",
    Soda = "Soda",
}
