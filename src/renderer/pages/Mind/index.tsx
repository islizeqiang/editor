import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import GGEditor, { Mind } from 'gg-editor';

import EditorMinimap from '@/components/EditorMinimap';
import { MindContextMenu } from '@/components/EditorContextMenu';
import { MindDetailPanel } from '@/components/EditorDetailPanel';
import { MindToolbar } from '@/components/EditorToolbar';

import styles from './index.less';

GGEditor.setTrackable(false);

const generatorOperator = (fileName: string) => {
  if (window.electron) {
    const { FileOperator } = window.electron.remote.app;
    return new FileOperator(fileName);
  }
  return null;
};

const fileOperator = generatorOperator('myMind');

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (fileOperator) {
      const fileData = fileOperator.read();
      setData(JSON.parse(fileData));
    }
  }, []);

  const save = (saveData: any) => {
    if (fileOperator) {
      fileOperator.write(JSON.stringify(saveData));
    }
  };

  return (
    <GGEditor className={styles.editor}>
      <Row className={styles.editorHd}>
        <Col span={24}>
          <MindToolbar save={save} />
        </Col>
      </Row>
      <Row className={styles.editorBd}>
        <Col span={20} className={styles.editorContent}>
          {!!data && <Mind data={data} className={styles.mind} />}
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <MindDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <MindContextMenu />
    </GGEditor>
  );
};

export default Index;
