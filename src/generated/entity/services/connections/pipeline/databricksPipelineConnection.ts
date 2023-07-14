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
 * Databricks Connection Config
 */
export interface DatabricksPipelineConnection {
    connectionArguments?: { [key: string]: any };
    /**
     * Host and port of the Databricks service.
     */
    hostPort: string;
    /**
     * Databricks compute resources URL.
     */
    httpPath?:                   string;
    supportsMetadataExtraction?: boolean;
    /**
     * Generated Token to connect to Databricks.
     */
    token: string;
    /**
     * Service Type
     */
    type?: DatabricksType;
}

/**
 * Service Type
 *
 * Service type.
 */
export enum DatabricksType {
    DatabricksPipeline = "DatabricksPipeline",
}
