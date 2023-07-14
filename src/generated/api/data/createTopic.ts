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
 * Create a topic entity request
 */
export interface CreateTopic {
    /**
     * Topic clean up policy. For Kafka - `cleanup.policy` configuration.
     */
    cleanupPolicies?: CleanupPolicy[];
    /**
     * Description of the topic instance. What it has and how to use it.
     */
    description?: string;
    /**
     * Display Name that identifies this topic.
     */
    displayName?: string;
    /**
     * Entity extension data with custom attributes added to the entity.
     */
    extension?: any;
    /**
     * Maximum message size in bytes. For Kafka - `max.message.bytes` configuration.
     */
    maximumMessageSize?: number;
    messageSchema?:      Topic;
    /**
     * Minimum number replicas in sync to control durability. For Kafka - `min.insync.replicas`
     * configuration.
     */
    minimumInSyncReplicas?: number;
    /**
     * Name that identifies this topic instance uniquely.
     */
    name: string;
    /**
     * Owner of this topic
     */
    owner?: EntityReference;
    /**
     * Number of partitions into which the topic is divided.
     */
    partitions: number;
    /**
     * Replication Factor in integer (more than 1).
     */
    replicationFactor?: number;
    /**
     * Maximum size of a partition in bytes before old data is discarded. For Kafka -
     * `retention.bytes` configuration.
     */
    retentionSize?: number;
    /**
     * Retention time in milliseconds. For Kafka - `retention.ms` configuration.
     */
    retentionTime?: number;
    /**
     * Fully qualified name of the messaging service where this topic is hosted in
     */
    service: string;
    /**
     * Tags for this topic
     */
    tags?: TagLabel[];
    /**
     * Contains key/value pair of topic configuration.
     */
    topicConfig?: { [key: string]: any };
}

/**
 * Topic clean up policy. For Kafka - `cleanup.policy` configuration.
 */
export enum CleanupPolicy {
    Compact = "compact",
    Delete = "delete",
}

/**
 * This schema defines the Topic entity. A topic is a feed into which message are published
 * to by publishers and read from by consumers in a messaging service.
 */
export interface Topic {
    /**
     * Columns in this table.
     */
    schemaFields?: Field[];
    /**
     * Schema used for message serialization. Optional as some topics may not have associated
     * schemas.
     */
    schemaText?: string;
    /**
     * Schema used for message serialization.
     */
    schemaType?: SchemaType;
}

/**
 * This schema defines the nested object to capture protobuf/avro/jsonschema of topic's
 * schema.
 */
export interface Field {
    /**
     * Child fields if dataType or arrayDataType is `map`, `record`, `message`
     */
    children?: Field[];
    /**
     * Data type of the field (int, date etc.).
     */
    dataType: DataTypeTopic;
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
     * Display Name that identifies this field name.
     */
    displayName?:        string;
    fullyQualifiedName?: string;
    name:                string;
    /**
     * Tags associated with the column.
     */
    tags?: TagLabel[];
}

/**
 * Data type of the field (int, date etc.).
 *
 * This enum defines the type of data defined in schema.
 */
export enum DataTypeTopic {
    Array = "ARRAY",
    Boolean = "BOOLEAN",
    Bytes = "BYTES",
    Date = "DATE",
    Double = "DOUBLE",
    Enum = "ENUM",
    Error = "ERROR",
    Fixed = "FIXED",
    Float = "FLOAT",
    Int = "INT",
    Long = "LONG",
    Map = "MAP",
    Null = "NULL",
    Record = "RECORD",
    String = "STRING",
    Time = "TIME",
    Timestamp = "TIMESTAMP",
    Timestampz = "TIMESTAMPZ",
    Union = "UNION",
    Unknown = "UNKNOWN",
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
 * Schema used for message serialization.
 *
 * Schema type used for the message.
 */
export enum SchemaType {
    Avro = "Avro",
    JSON = "JSON",
    None = "None",
    Other = "Other",
    Protobuf = "Protobuf",
}

/**
 * Owner of this topic
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
