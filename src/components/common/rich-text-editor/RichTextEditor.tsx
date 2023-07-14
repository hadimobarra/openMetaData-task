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

/* eslint-disable */

import { Editor, Viewer } from '@toast-ui/react-editor';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
// import { EDITOR_TOOLBAR_ITEMS } from './EditorToolBar';
import './RichTextEditor.css';
import { editorRef, RichTextEditorProp } from './RichTextEditor.interface';

const RichTextEditor = forwardRef<editorRef, RichTextEditorProp>(
  (
    {
      // placeHolder = 'Write your description',
      // previewStyle = 'tab',
      // editorType = 'markdown',
      // previewHighlight = false,
      // useCommandShortcut = true,
      extendedAutolinks = true,
      // hideModeSwitch = true,
      // autofocus = false,
      initialValue = '',
      readonly,
      // height,
      className,
      style,
      onTextChange,
    }: RichTextEditorProp,
    ref
  ) => {
    const richTextEditorRef = createRef<Editor>();

    const [editorValue, setEditorValue] = useState(initialValue);

    const listItems =
     ['اداره کل دفتر مدیر عامل',
     'معاونت مالی',
      'معاونت فناوری اطلاعات',
      'معاونت راهبرد', 
      'معاونت فنی',
      'معاونت توسعه سازمان و سرمایه انسانی',
      'اداره کل ارتباطات', 'معاونت بازاریابی'];

    const onChangeHandler = (e:any) => {
      const value = e.target.value;
      setEditorValue(value);
      onTextChange && onTextChange(value);
    };

    useImperativeHandle(ref, () => ({
      getEditorContent() {
        return editorValue;
      },
      clearEditorContent() {
        richTextEditorRef.current?.getInstance().setMarkdown('');
      },
    }));

    useEffect(() => {
      setEditorValue(initialValue);
    }, [initialValue]);

    return (
      <div className={classNames(className)} style={style}>
        {readonly ? (
          <div
            className="tw-border tw-border-main tw-p-2 tw-rounded"
            data-testid="viewer">
            <Viewer
              extendedAutolinks={extendedAutolinks}
              initialValue={editorValue}
              key={uniqueId()}
              ref={richTextEditorRef}
            />
          </div>
        ) : (
          <div data-testid="editor">
          <p>Please select one of these items: </p>
          <br />
          <select value={editorValue} onChange={onChangeHandler} >
            {listItems.map((item) => {
              return <option value={item} key={item}>{item}</option>
            })}
          </select>


          </div>
        )}
      </div>
    );
  }
);

export default RichTextEditor;