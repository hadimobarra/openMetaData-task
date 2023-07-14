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
 * Looker Connection Config
 */
export interface LookerConnection {
    /**
     * User's Client ID. This user should have privileges to read all the metadata in Looker.
     */
    clientId: string;
    /**
     * User's Client Secret.
     */
    clientSecret: string;
    /**
     * Credentials to extract the .lkml files from a repository. This is required to get all the
     * lineage and definitions.
     */
    githubCredentials?: GitHubCredentials;
    /**
     * URL to the Looker instance.
     */
    hostPort:                    string;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     */
    type?: LookerType;
}

/**
 * Credentials to extract the .lkml files from a repository. This is required to get all the
 * lineage and definitions.
 *
 * Do not set any credentials. Note that credentials are required to extract .lkml views and
 * their lineage.
 *
 * Credentials for a GitHub repository
 */
export interface GitHubCredentials {
    /**
     * The name of a GitHub repository. For example, in
     * https://github.com/open-metadata/OpenMetadata, the name is `OpenMetadata`.
     */
    repositoryName?: string;
    /**
     * The owner (user or organization) of a GitHub repository. For example, in
     * https://github.com/open-metadata/OpenMetadata, the owner is `open-metadata`.
     */
    repositoryOwner?: string;
    /**
     * Token to use the API. This is required for private repositories and to ensure we don't
     * hit API limits.
     */
    token?: string;
}

/**
 * Service Type
 *
 * Looker service type
 */
export enum LookerType {
    Looker = "Looker",
}
