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
 * DataInsightChartResult represents data that will be consumed by a specific chart
 */
export interface DataInsightChartResult {
    /**
     * Chart Type that will consume the data. Must match name of dataInsightChart.
     */
    chartType: DataInsightChartType;
    /**
     * Array of consumable data.
     */
    data?: PercentageOfEntitiesWithDescriptionByType[];
}

/**
 * Chart Type that will consume the data. Must match name of dataInsightChart.
 *
 * chart type. Must match `name` of a `dataInsightChartDefinition`.
 */
export enum DataInsightChartType {
    DailyActiveUsers = "DailyActiveUsers",
    MostActiveUsers = "MostActiveUsers",
    MostViewedEntities = "MostViewedEntities",
    PageViewsByEntities = "PageViewsByEntities",
    PercentageOfEntitiesWithDescriptionByType = "PercentageOfEntitiesWithDescriptionByType",
    PercentageOfEntitiesWithOwnerByType = "PercentageOfEntitiesWithOwnerByType",
    TotalEntitiesByTier = "TotalEntitiesByTier",
    TotalEntitiesByType = "TotalEntitiesByType",
}

/**
 * percentageOfEntitiesWithDescriptionByType data blob
 *
 * percentageOfEntitiesWithOwnerByType data blob
 *
 * totalEntitiesByTier data blob
 *
 * totalEntitiesByType data blob
 *
 * dailyActiveUsers data blob
 *
 * pageViewsByEntities data blob
 */
export interface PercentageOfEntitiesWithDescriptionByType {
    /**
     * decimal fraction of entity with completed description
     */
    completedDescription?: number;
    /**
     * decimal fraction of entity with completed description
     */
    completedDescriptionFraction?: number;
    /**
     * decimal fraction of entity with completed description
     *
     * Decimal fraction of entity with an owner.
     *
     * Total count of entity for the given entity type
     */
    entityCount?: number;
    /**
     * Type of entity. Derived from the entity class.
     *
     * Type of entity. Derived from the page URL.
     */
    entityType?: string;
    /**
     * timestamp
     */
    timestamp?: number;
    /**
     * Decimal fraction of entity with an owner.
     */
    hasOwner?: number;
    /**
     * Decimal fraction of entity with an owner.
     */
    hasOwnerFraction?: number;
    /**
     * Total count of entity for the given entity type
     */
    entityCountFraction?: number;
    /**
     * Tier of entity. Derived from tags.
     */
    entityTier?: string;
    /**
     * Number of active users (user with at least 1 session).
     */
    activeUsers?: number;
    /**
     * Number of page views
     *
     * Total number of pages viewed by the user
     *
     * Type of entity. Derived from the page URL.
     */
    pageViews?: number;
    /**
     * avg. duration of a sessions in seconds
     */
    avgSessionDuration?: number;
    /**
     * date time of the most recent session for the user
     */
    lastSession?: number;
    /**
     * Total duration of all sessions in seconds
     */
    sessionDuration?: number;
    /**
     * Total number of sessions
     */
    sessions?: number;
    /**
     * Team a user belongs to
     */
    team?: string;
    /**
     * Name of a user
     */
    userName?: string;
    /**
     * Number of page views
     */
    entityFqn?: string;
    /**
     * Entity href link
     */
    entityHref?: string;
    /**
     * Owner of the entity
     */
    owner?: string;
}
