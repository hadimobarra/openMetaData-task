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
 * This schema defines structure of table query
 */
export interface TableQuery {
    /**
     * Date of execution of SQL query
     */
    queries?: Array<any[] | boolean | number | number | null | TableQueryObject | string>;
}

export interface TableQueryObject {
    /**
     * Flag to check if query was aborted during execution
     */
    aborted?: boolean;
    /**
     * Date of execution of SQL query
     */
    analysisDate?: Date;
    /**
     * Database associated with the table in the query
     */
    databaseName?: string;
    /**
     * Database schema of the associated with query
     */
    databaseSchema?: string;
    /**
     * How long did the query took to run in seconds.
     */
    duration?: number;
    /**
     * End time of execution of SQL query
     */
    endTime?: string;
    /**
     * SQL query
     */
    query: string;
    /**
     * Name that identifies this database service.
     */
    serviceName: string;
    /**
     * Start time of execution of SQL query
     */
    startTime?: string;
    /**
     * Name of the user that executed the SQL query
     */
    userName?: string;
}
