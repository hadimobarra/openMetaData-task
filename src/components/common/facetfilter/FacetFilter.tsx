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

import { Button, Divider, Typography } from 'antd';
import classNames from 'classnames';
import { AggregationEntry } from 'interface/search.interface';
import { isEmpty, isNil } from 'lodash';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getSortedTierBucketList } from 'utils/EntityUtils';

import {
  compareAggregationKey,
  translateAggregationKeyToTitle,
} from './facetFilter.constants';
import { FacetFilterProps } from './facetFilter.interface';
import FilterContainer from './FilterContainer';

const FacetFilter: React.FC<FacetFilterProps> = ({
  aggregations = {},
  filters = {},
  showDeleted = false,
  onSelectHandler,
  onChangeShowDeleted,
  onClearFilter,
}) => {
  const { t } = useTranslation();
  /**
   * Merging aggregations with filters.
   * The aim is to ensure that if there a filter on aggregationKey `k` with value `v`,
   * but in `aggregations[k]` there is not bucket with value `v`,
   * we add an empty bucket with value `v` and 0 elements so the UI displays that the filter exists.
   */
  const aggregationEntries = useMemo(() => {
    if (isEmpty(aggregations)) {
      return [];
    }

    if (isNil(filters) || isEmpty(filters)) {
      const { 'tier.tagFQN': tier, ...restProps } = aggregations;

      const sortedTiersList = {
        ...tier,
        buckets: tier ? getSortedTierBucketList(tier.buckets) : [],
      };

      return Object.entries({ ...restProps, 'tier.tagFQN': sortedTiersList })
        .filter(([, { buckets }]) => buckets.length)
        .sort(([key1], [key2]) => compareAggregationKey(key1, key2));
    }

    const aggregationEntriesWithZeroFilterBuckets: AggregationEntry[] =
      Object.entries(aggregations).map(([aggregationKey, { buckets }]) => [
        aggregationKey,
        {
          buckets:
            aggregationKey in filters
              ? [
                  ...buckets,
                  ...filters[aggregationKey]
                    .filter((f) => !buckets.some((b) => b.key === f))
                    .map((f) => ({ key: f, doc_count: 0 })),
                ]
              : buckets,
        },
      ]);

    const missingAggregationEntries: AggregationEntry[] = Object.entries(
      filters
    )
      .filter(
        ([aggregationKey, values]) =>
          !(aggregationKey in aggregations) && !isEmpty(values)
      )
      .map(([aggregationKey, values]) => [
        aggregationKey,
        { buckets: values.map((v) => ({ key: v, doc_count: 0 })) },
      ]);

    const combinedAggregations = [
      ...aggregationEntriesWithZeroFilterBuckets,
      ...missingAggregationEntries,
    ];

    return combinedAggregations
      .filter(([, { buckets }]) => buckets.length)
      .sort(([key1], [key2]) => compareAggregationKey(key1, key2));
  }, [aggregations, filters]);

  return (
    <div data-testid="face-filter">
      <div className="sidebar-my-data-holder mt-2 mb-3 p-x-md">
        <Button
          className="text-primary cursor-pointer p-0"
          disabled={isEmpty(filters)}
          type="link"
          onClick={() => onClearFilter({})}>
          {t('label.clear-entity', {
            entity: t('label.all'),
          })}
        </Button>
      </div>
      <hr className="m-y-xs" />
      <div
        className="sidebar-my-data-holder mt-2 mb-3 p-x-md"
        data-testid="show-deleted-cntnr">
        <div
          className="filter-group justify-between m-b-xs"
          data-testid="filter-container-deleted">
          <div className="flex">
            <div className="filters-title w-36 truncate custom-checkbox-label">
              {t('label.show-deleted')}
            </div>
          </div>
          <div
            className={classNames(
              'toggle-switch m-r-0',
              showDeleted ? 'open' : null
            )}
            data-testid="show-deleted"
            onClick={() => {
              onChangeShowDeleted(!showDeleted);
            }}>
            <div className="switch" />
          </div>
        </div>
      </div>
      <hr className="m-t-xs" />
      {aggregationEntries.map(
        (
          [aggregationKey, aggregation],
          index,
          { length: aggregationsLength }
        ) => (
          <div
            data-testid={`filter-heading-${aggregationKey}`}
            key={aggregationKey}>
            <div className="d-flex justify-between flex-col p-x-md">
              <Typography.Paragraph className="m-y-sm common-left-panel-card-heading">
                {translateAggregationKeyToTitle(aggregationKey)}
              </Typography.Paragraph>
            </div>
            <div
              className="sidebar-my-data-holder p-x-md"
              data-testid="filter-container">
              {aggregation.buckets.slice(0, 10).map((bucket) => (
                <FilterContainer
                  count={bucket.doc_count}
                  isSelected={
                    !isNil(filters) && aggregationKey in filters
                      ? filters[aggregationKey].includes(bucket.key)
                      : false
                  }
                  key={bucket.key}
                  name={bucket.key}
                  type={aggregationKey}
                  onSelect={onSelectHandler}
                />
              ))}
            </div>
            {index !== aggregationsLength - 1 && <Divider className="m-0" />}
          </div>
        )
      )}
    </div>
  );
};

export default FacetFilter;
