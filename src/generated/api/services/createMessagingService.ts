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
 * Create Messaging service entity request
 */
export interface CreateMessagingService {
    connection: MessagingConnection;
    /**
     * Description of messaging service entity.
     */
    description?: string;
    /**
     * Display Name that identifies this messaging service. It could be title or label from the
     * source services.
     */
    displayName?: string;
    /**
     * Name that identifies the this entity instance uniquely
     */
    name: string;
    /**
     * Owner of this messaging service.
     */
    owner?:      EntityReference;
    serviceType: MessagingServiceType;
    /**
     * Tags for this Messaging Service.
     */
    tags?: TagLabel[];
}

/**
 * Dashboard Connection.
 */
export interface MessagingConnection {
    config?: Connection;
}

/**
 * Kafka Connection Config
 *
 * Redpanda Connection Config
 *
 * Kinesis Connection Config
 *
 * Custom Messaging Service Connection to build a source that is not supported by
 * OpenMetadata yet.
 */
export interface Connection {
    /**
     * basic.auth.user.info schema registry config property, Client HTTP credentials in the form
     * of username:password.
     */
    basicAuthUserInfo?: string;
    /**
     * Kafka bootstrap servers. add them in comma separated values ex: host1:9092,host2:9092
     *
     * Redpanda bootstrap servers. add them in comma separated values ex: host1:9092,host2:9092
     */
    bootstrapServers?: string;
    /**
     * Confluent Kafka Consumer Config. From
     * https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md
     *
     * Confluent Redpanda Consumer Config
     */
    consumerConfig?: { [key: string]: any };
    /**
     * sasl.mechanism Consumer Config property
     */
    saslMechanism?: SaslMechanismType;
    /**
     * sasl.password consumer config property
     */
    saslPassword?: string;
    /**
     * sasl.username consumer config property
     */
    saslUsername?: string;
    /**
     * Confluent Kafka Schema Registry Config. From
     * https://docs.confluent.io/5.5.1/clients/confluent-kafka-python/index.html#confluent_kafka.schema_registry.SchemaRegistryClient
     *
     * Confluent Redpanda Schema Registry Config.
     */
    schemaRegistryConfig?: { [key: string]: any };
    /**
     * Confluent Kafka Schema Registry URL.
     *
     * Confluent Redpanda Schema Registry URL.
     */
    schemaRegistryURL?:          string;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     *
     * Custom messaging service type
     */
    type?:              MessagingServiceType;
    awsConfig?:         AWSCredentials;
    connectionOptions?: { [key: string]: string };
    /**
     * Source Python Class Name to instantiated by the ingestion workflow
     */
    sourcePythonClass?: string;
}

/**
 * AWS credentials configs.
 */
export interface AWSCredentials {
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
    awsRegion: string;
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
}

/**
 * sasl.mechanism Consumer Config property
 *
 * SASL Mechanism consumer config property
 */
export enum SaslMechanismType {
    Gssapi = "GSSAPI",
    Oauthbearer = "OAUTHBEARER",
    Plain = "PLAIN",
    ScramSHA256 = "SCRAM-SHA-256",
    ScramSHA512 = "SCRAM-SHA-512",
}

/**
 * Service Type
 *
 * Kafka service type
 *
 * Redpanda service type
 *
 * Service type.
 *
 * Custom messaging service type
 *
 * Type of messaging service - Kafka or Pulsar.
 */
export enum MessagingServiceType {
    CustomMessaging = "CustomMessaging",
    Kafka = "Kafka",
    Kinesis = "Kinesis",
    Redpanda = "Redpanda",
}

/**
 * Owner of this messaging service.
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
