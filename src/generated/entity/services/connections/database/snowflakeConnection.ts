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
 * Snowflake Connection Config
 */
export interface SnowflakeConnection {
    /**
     * If the Snowflake URL is https://xyz1234.us-east-1.gcp.snowflakecomputing.com, then the
     * account is xyz1234.us-east-1.gcp
     */
    account:              string;
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Database of the data source. This is optional parameter, if you would like to restrict
     * the metadata reading to a single database. When left blank, OpenMetadata Ingestion
     * attempts to scan all the databases.
     */
    database?: string;
    /**
     * Optional configuration for ingestion of TRANSIENT and TEMPORARY tables, By default, it
     * will skip the TRANSIENT and TEMPORARY tables.
     */
    includeTempTables?: boolean;
    /**
     * Password to connect to Snowflake.
     */
    password?: string;
    /**
     * Connection to Snowflake instance via Private Key
     */
    privateKey?: string;
    /**
     * Session query tag used to monitor usage on snowflake. To use a query tag snowflake user
     * should have enough privileges to alter the session.
     */
    queryTag?: string;
    /**
     * Snowflake Role.
     */
    role?: string;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?: SnowflakeScheme;
    /**
     * Snowflake Passphrase Key used with Private Key
     */
    snowflakePrivatekeyPassphrase?: string;
    supportsDatabase?:              boolean;
    supportsDBTExtraction?:         boolean;
    supportsLineageExtraction?:     boolean;
    supportsMetadataExtraction?:    boolean;
    supportsProfiler?:              boolean;
    supportsQueryComment?:          boolean;
    supportsUsageExtraction?:       boolean;
    /**
     * Service Type
     */
    type?: SnowflakeType;
    /**
     * Username to connect to Snowflake. This user should have privileges to read all the
     * metadata in Snowflake.
     */
    username: string;
    /**
     * Snowflake warehouse.
     */
    warehouse: string;
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum SnowflakeScheme {
    Snowflake = "snowflake",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum SnowflakeType {
    Snowflake = "Snowflake",
}
