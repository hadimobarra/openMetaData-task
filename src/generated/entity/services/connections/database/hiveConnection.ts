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
 * Hive SQL Connection Config
 */
export interface HiveConnection {
    /**
     * Authentication mode to connect to hive.
     */
    auth?: AuthenticationMode;
    /**
     * Authentication options to pass to Hive connector. These options are based on SQLAlchemy.
     */
    authOptions?:         string;
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Optional name to give to the database in OpenMetadata. If left blank, we will use default
     * as the database name.
     */
    databaseName?: string;
    /**
     * Database Schema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single schema. When left blank, OpenMetadata Ingestion
     * attempts to scan all the schemas.
     */
    databaseSchema?: string;
    /**
     * Host and port of the Hive service.
     */
    hostPort: string;
    /**
     * If authenticating with Kerberos specify the Kerberos service name
     */
    kerberosServiceName?: string;
    /**
     * Password to connect to Hive.
     */
    password?: string;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?:                     HiveScheme;
    supportsDBTExtraction?:      boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    /**
     * Service Type
     */
    type?: HiveType;
    /**
     * Username to connect to Hive. This user should have privileges to read all the metadata in
     * Hive.
     */
    username?: string;
}

/**
 * Authentication mode to connect to hive.
 */
export enum AuthenticationMode {
    Basic = "BASIC",
    Custom = "CUSTOM",
    Gssapi = "GSSAPI",
    Jwt = "JWT",
    Kerberos = "KERBEROS",
    LDAP = "LDAP",
    None = "NONE",
    Nosasl = "NOSASL",
    Plain = "PLAIN",
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum HiveScheme {
    Hive = "hive",
    HiveHTTP = "hive+http",
    HiveHTTPS = "hive+https",
    Impala = "impala",
    Impala4 = "impala4",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum HiveType {
    Hive = "Hive",
}
