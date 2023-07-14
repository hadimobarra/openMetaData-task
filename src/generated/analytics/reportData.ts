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
 * Report Data
 */
export interface ReportData {
    /**
     * Data captured
     */
    data?: DataClass;
    /**
     * Unique identifier for a result.
     */
    id?: string;
    /**
     * Type of data
     */
    reportDataType?: ReportDataType;
    /**
     * timestamp for of a result ingestion.
     */
    timestamp?: number;
}

/**
 * Data captured
 *
 * Refined data for Entity Report.
 *
 * Refined data for overview report
 */
export interface DataClass {
    /**
     * Number of completed description for the entity
     */
    completedDescriptions?: number;
    /**
     * number of entities
     */
    entityCount?: number;
    /**
     * Tier for the entity
     *
     * entity tier
     */
    entityTier?: string;
    /**
     * type of the entity
     *
     * entity type
     */
    entityType?: string;
    /**
     * number of entities with owner
     */
    hasOwner?: number;
    /**
     * Number of missing description for the entity
     */
    missingDescriptions?: number;
    /**
     * number of entities missing owners
     */
    missingOwner?: number;
    /**
     * Organization associated with the entity (i.e. owner)
     */
    organization?: string;
    /**
     * Team associated with the entity (i.e. owner)
     *
     * the team the user belongs to
     */
    team?: string;
    /**
     * latest session
     */
    lastSession?: number;
    /**
     * total user count
     */
    totalPageView?: number;
    /**
     * total user count
     */
    totalSessionDuration?: number;
    /**
     * total number of sessions
     */
    totalSessions?: number;
    /**
     * user ID in OM
     */
    userId?: string;
    /**
     * user name
     */
    userName?: string;
    /**
     * entity fully qualified name
     */
    entityFqn?: string;
    /**
     * entity href
     */
    entityHref?: string;
    /**
     * Name of the entity owner
     */
    owner?: string;
    /**
     * Name of the entity owner
     */
    ownerId?: string;
    /**
     * Tags FQN
     */
    tagsFQN?: string[];
    /**
     * Number of time the entity was viewed
     */
    views?: number;
}

/**
 * Type of data
 */
export enum ReportDataType {
    EntityReportData = "EntityReportData",
    WebAnalyticEntityViewReportData = "WebAnalyticEntityViewReportData",
    WebAnalyticUserActivityReportData = "WebAnalyticUserActivityReportData",
}
