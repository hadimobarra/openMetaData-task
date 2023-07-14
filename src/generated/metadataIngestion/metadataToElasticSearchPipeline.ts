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

 export interface MetadataToElasticSearchPipelineClass {
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
     * Pipeline type
     */
    type: MetadataToESConfigType;
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
}

/**
 * Pipeline type
 *
 * Pipeline Source Config Metadata Pipeline type
 */
export enum MetadataToESConfigType {
    MetadataToElasticSearch = "MetadataToElasticSearch",
}
