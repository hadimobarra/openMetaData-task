/*
 *  Copyright 2023 Collate.
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
import { CloseOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import React from 'react';

interface TagButtonProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  isRemovable?: boolean;
  dataTestId?: string;
  tooltip?: React.ReactNode;
  onClick?: () => void;
  removeTag?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    removedTag: string
  ) => void;
}

const TagButton: React.FC<TagButtonProps> = ({
  label,
  onClick,
  icon,
  className = '',
  isRemovable = false,
  removeTag,
  dataTestId = label,
  tooltip = label,
}) => {
  const buttonClassNames = classNames(
    'tag-button-container tw-inline-flex text-xs font-medium rounded-4 whitespace-nowrap tw-bg-white tw-border tw-items-center tw-mr-2 tw-mt-2 tw-font-semibold',
    { 'tw-pl-2': isRemovable },
    { 'tw-px-2': !isRemovable },
    className
  );

  return (
    <div
      className={buttonClassNames}
      data-testid={dataTestId}
      onClick={onClick}>
      <Tooltip placement="bottomLeft" title={tooltip}>
        <div className="d-flex items-center">
          {icon && <span className="m-r-xss">{icon}</span>}
          <span className="text-xs font-medium">{label}</span>
        </div>
      </Tooltip>
      {isRemovable && (
        <span
          className="tw-py-0.5 tw-px-2 tw-rounded tw-cursor-pointer"
          data-testid={`remove-${label}-tag`}
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            e.preventDefault();
            e.stopPropagation();
            removeTag && removeTag(e, label);
          }}>
          <CloseOutlined className="tw-text-primary" />
        </span>
      )}
    </div>
  );
};

export default TagButton;
