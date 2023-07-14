/*
 *  Copyright 2022 Collate.
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

import i18next from 'i18next';
import { StepperStepType } from 'Models';
import { FilterPattern } from '../generated/entity/services/ingestionPipelines/ingestionPipeline';

export const STEPS_FOR_ADD_INGESTION: Array<StepperStepType> = [
  {
    name: i18next.t('label.configure-entity', {
      entity: i18next.t('label.ingestion'),
    }),
    step: 1,
  },
  {
    name: i18next.t('label.configure-entity', {
      entity: i18next.t('label.dbt-lowercase'),
    }),
    step: 2,
  },
  {
    name: i18next.t('label.configure-entity', {
      entity: i18next.t('label.metadata-to-es-config-optional'),
    }),
    step: 3,
  },
  { name: i18next.t('label.schedule-interval'), step: 4 },
];

export const INITIAL_FILTER_PATTERN: FilterPattern = {
  includes: [],
  excludes: [],
};

export const INGESTION_ACTION_TYPE = {
  ADD: 'add',
  EDIT: 'edit',
};

export const PIPELINE_TYPE_LOCALIZATION = {
  dataInsight: 'data-insight',
  dbt: 'dbt-lowercase',
  elasticSearchReindex: 'elastic-search-re-index',
  lineage: 'lineage',
  metadata: 'metadata',
  profiler: 'profiler',
  TestSuite: 'test-suite',
  usage: 'usage',
};

export const DBT_CLASSIFICATION_DEFAULT_VALUE = 'dbtTags';