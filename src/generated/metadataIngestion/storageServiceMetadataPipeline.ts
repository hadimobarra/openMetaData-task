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

 export interface StorageServiceMetadataPipelineClass {
    /**
     * Regex to only fetch containers that matches the pattern.
     */
    containerFilterPattern?: FilterPattern;
    /**
     * Pipeline type
     */
    type?: StorageMetadataConfigType;
}

/**
 * Regex to only fetch containers that matches the pattern.
 *
 * Regex to only fetch dashboards or charts that matches the pattern.
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
 * Pipeline type
 *
 * Object Store Source Config Metadata Pipeline type
 */
export enum StorageMetadataConfigType {
    StorageMetadata = "StorageMetadata",
}
