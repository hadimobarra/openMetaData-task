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

import { Drawer } from 'antd';
import { AxiosError } from 'axios';
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getFeedById } from 'rest/feedsAPI';
import { confirmStateInitialValue } from '../../../constants/Feeds.constants';
import { Thread } from '../../../generated/entity/feed/thread';
import { getEntityField, getEntityFQN } from '../../../utils/FeedUtils';
import { showErrorToast } from '../../../utils/ToastUtils';
import { ConfirmState } from '../ActivityFeedCard/ActivityFeedCard.interface';
import ActivityFeedEditor from '../ActivityFeedEditor/ActivityFeedEditor';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';
import { ActivityFeedPanelProp } from './ActivityFeedPanel.interface';
import FeedPanelBody from './FeedPanelBody';
import FeedPanelHeader from './FeedPanelHeader';

const ActivityFeedPanel: FC<ActivityFeedPanelProp> = ({
  open,
  selectedThread,
  onCancel,
  className,
  postFeed,
  deletePostHandler,
  updateThreadHandler,
}) => {
  const { t } = useTranslation();
  const [threadData, setThreadData] = useState<Thread>(selectedThread);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const entityField = getEntityField(selectedThread.about);
  const entityFQN = getEntityFQN(selectedThread.about);

  const [confirmationState, setConfirmationState] = useState<ConfirmState>(
    confirmStateInitialValue
  );

  const onDiscard = () => {
    setConfirmationState(confirmStateInitialValue);
  };

  const onPostDelete = () => {
    if (confirmationState.postId && confirmationState.threadId) {
      deletePostHandler?.(
        confirmationState.threadId,
        confirmationState.postId,
        confirmationState.isThread
      );
    }
    onDiscard();
  };

  const onConfirmation = (data: ConfirmState) => {
    setConfirmationState(data);
  };

  useEffect(() => {
    getFeedById(selectedThread.id)
      .then((res) => {
        setThreadData(res.data);
      })
      .catch((err: AxiosError) => {
        showErrorToast(
          err,
          t('server.entity-fetch-error', {
            entity: t('label.message-plural-lowercase'),
          })
        );
      })
      .finally(() => setIsLoading(false));
  }, [selectedThread]);

  return (
    <Drawer
      className={classNames('feed-drawer', className)}
      closable={false}
      open={open}
      title={
        <FeedPanelHeader
          className="tw-px-4 tw-shadow-sm"
          entityFQN={entityFQN}
          entityField={entityField as string}
          threadType={selectedThread.type}
          onCancel={onCancel}
        />
      }
      width={576}
      onClose={onCancel}>
      <div id="feed-panel">
        <FeedPanelBody
          className="tw-p-4 tw-pl-8 tw-mb-3"
          deletePostHandler={deletePostHandler}
          isLoading={isLoading}
          threadData={threadData as Thread}
          updateThreadHandler={updateThreadHandler}
          onConfirmation={onConfirmation}
        />
        <ActivityFeedEditor
          buttonClass="tw-mr-4"
          className="tw-ml-5 tw-mr-2 tw-mb-2"
          onSave={postFeed}
        />
      </div>
      <DeleteConfirmationModal
        visible={confirmationState.state}
        onDelete={onPostDelete}
        onDiscard={onDiscard}
      />
    </Drawer>
  );
};

export default ActivityFeedPanel;
