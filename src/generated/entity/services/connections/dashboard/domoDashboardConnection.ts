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
 * Domo Dashboard Connection Config
 */
export interface DomoDashboardConnection {
    /**
     * Access token to connect to to DOMO
     */
    accessToken?: string;
    /**
     * API Host to connect to DOMO instance
     */
    apiHost?: string;
    /**
     * Client ID for DOMO
     */
    clientId: string;
    /**
     * Connect to Sandbox Domain
     */
    sandboxDomain: string;
    /**
     * Secret Token to connect DOMO
     */
    secretToken:                 string;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     */
    type?: DomoDashboardType;
}

/**
 * Service Type
 *
 * service type
 */
export enum DomoDashboardType {
    DomoDashboard = "DomoDashboard",
}
