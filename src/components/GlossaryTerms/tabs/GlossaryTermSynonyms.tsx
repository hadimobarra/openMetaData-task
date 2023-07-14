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

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Select, Tooltip, Typography } from 'antd';
import { ReactComponent as EditIcon } from 'assets/svg/edit-new.svg';
import TagButton from 'components/TagButton/TagButton.component';
import { DE_ACTIVE_COLOR, NO_DATA_PLACEHOLDER } from 'constants/constants';
import { NO_PERMISSION_FOR_ACTION } from 'constants/HelperTextUtil';
import { t } from 'i18next';
import { cloneDeep, isEmpty, isEqual } from 'lodash';
import React, { useEffect, useState } from 'react';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus-primary.svg';
import { GlossaryTerm } from '../../../generated/entity/data/glossaryTerm';
import { OperationPermission } from '../../PermissionProvider/PermissionProvider.interface';

interface GlossaryTermSynonymsProps {
  permissions: OperationPermission;
  glossaryTerm: GlossaryTerm;
  onGlossaryTermUpdate: (glossaryTerm: GlossaryTerm) => void;
}

const GlossaryTermSynonyms = ({
  permissions,
  glossaryTerm,
  onGlossaryTermUpdate,
}: GlossaryTermSynonymsProps) => {
  const [isViewMode, setIsViewMode] = useState<boolean>(true);
  const [synonyms, setSynonyms] = useState<string[]>([]);

  const getSynonyms = () => (
    <div className="d-flex flex-wrap">
      {synonyms.map((synonym, index) => (
        <TagButton
          className="glossary-synonym-tag"
          key={index}
          label={synonym}
        />
      ))}
      {permissions.EditAll && synonyms.length === 0 && (
        <TagButton
          className="tw-text-primary cursor-pointer"
          dataTestId="synonym-add-button"
          icon={<PlusIcon height={16} name="plus" width={16} />}
          label={t('label.add')}
          tooltip=""
          onClick={() => {
            setIsViewMode(false);
          }}
        />
      )}
      {!permissions.EditAll && synonyms.length === 0 && (
        <div>{NO_DATA_PLACEHOLDER}</div>
      )}
    </div>
  );

  const handleCancel = () => {
    setSynonyms(glossaryTerm.synonyms || []);
    setIsViewMode(true);
  };

  const handleSynonymsSave = (newSynonyms: string[]) => {
    if (!isEqual(newSynonyms, glossaryTerm.synonyms)) {
      let updatedGlossaryTerm = cloneDeep(glossaryTerm);
      updatedGlossaryTerm = {
        ...updatedGlossaryTerm,
        synonyms: newSynonyms,
      };

      onGlossaryTermUpdate(updatedGlossaryTerm);
    }
    setIsViewMode(true);
  };

  useEffect(() => {
    if (glossaryTerm.synonyms?.length) {
      // removing empty string
      setSynonyms(glossaryTerm.synonyms.filter((synonym) => !isEmpty(synonym)));
    }
  }, [glossaryTerm]);

  return (
    <div className="flex flex-col m-r-xs" data-testid="synonyms-container">
      <div className="d-flex items-center">
        <Typography.Text className="right-panel-label">
          {t('label.synonym-plural')}
        </Typography.Text>
        {permissions.EditAll && synonyms.length > 0 && (
          <Tooltip
            placement="bottomLeft"
            title={
              permissions.EditAll ? t('label.edit') : NO_PERMISSION_FOR_ACTION
            }>
            <Button
              className="cursor-pointer flex-center m-l-xss"
              data-testid="edit-button"
              disabled={!permissions.EditAll}
              icon={<EditIcon color={DE_ACTIVE_COLOR} width="14px" />}
              size="small"
              type="text"
              onClick={() => setIsViewMode(false)}
            />
          </Tooltip>
        )}
      </div>

      {isViewMode ? (
        getSynonyms()
      ) : (
        <div className="d-flex items-center gap-2">
          <Select
            className="glossary-select"
            id="synonyms-select"
            mode="tags"
            open={false}
            placeholder={t('label.add-entity', {
              entity: t('label.synonym-plural'),
            })}
            value={synonyms}
            onChange={(value) => setSynonyms(value)}
          />
          <>
            <Button
              className="w-6 p-x-05"
              data-testid="cancel-synonym-btn"
              icon={<CloseOutlined size={12} />}
              size="small"
              onClick={handleCancel}
            />
            <Button
              className="w-6 p-x-05"
              data-testid="save-synonym-btn"
              icon={<CheckOutlined size={12} />}
              size="small"
              type="primary"
              onClick={() => handleSynonymsSave(synonyms)}
            />
          </>
        </div>
      )}
    </div>
  );
};

export default GlossaryTermSynonyms;
