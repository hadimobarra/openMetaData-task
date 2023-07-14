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
 * Payload to create a data insight chart
 */
export interface CreateDataInsightChart {
    /**
     * Elasticsearch index name
     */
    dataIndexType?: DataReportIndex;
    /**
     * Description of the data insight chart.
     */
    description?: string;
    /**
     * Dimensions of the chart
     */
    dimensions?: ChartParameterValues[];
    /**
     * Display Name the data insight chart.
     */
    displayName?: string;
    /**
     * Metrics of the chart
     */
    metrics?: ChartParameterValues[];
    /**
     * Name that identifies this data insight chart.
     */
    name: string;
    /**
     * Owner of this chart
     */
    owner?: EntityReference;
}

/**
 * Elasticsearch index name
 *
 * Index where data are stored
 */
export enum DataReportIndex {
    EntityReportDataIndex = "entity_report_data_index",
    WebAnalyticEntityViewReportDataIndex = "web_analytic_entity_view_report_data_index",
    WebAnalyticUserActivityReportDataIndex = "web_analytic_user_activity_report_data_index",
}

/**
 * This schema defines the parameter values for a chart.
 */
export interface ChartParameterValues {
    /**
     * Data type of the parameter (int, date etc.).
     */
    chartDataType?: ChartDataType;
    /**
     * Display Name that identifies this parameter name.
     */
    displayName?: string;
    /**
     * name of the parameter.
     */
    name?: string;
}

/**
 * Data type of the parameter (int, date etc.).
 */
export enum ChartDataType {
    Array = "ARRAY",
    Boolean = "BOOLEAN",
    Date = "DATE",
    Datetime = "DATETIME",
    Decimal = "DECIMAL",
    Double = "DOUBLE",
    Float = "FLOAT",
    Int = "INT",
    Map = "MAP",
    Number = "NUMBER",
    Percentage = "PERCENTAGE",
    Set = "SET",
    String = "STRING",
    Time = "TIME",
    Timestamp = "TIMESTAMP",
}

/**
 * Owner of this chart
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
