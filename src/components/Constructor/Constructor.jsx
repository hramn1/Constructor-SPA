import React from 'react';
import ResponsiveAppBar from '../Ui/ResponsiveAppBar';
import { LeftPanel } from './left-panel/Left-panel';
import { Workspace } from './workspace/Worlspace';
import './consructor.scss';
import { RightPanel } from './right-panel/Right-panel';

export function Constructor() {
  return (
    <>
      <ResponsiveAppBar />
      <main className={'main-page'}>
        <LeftPanel />
        <Workspace />
        <RightPanel />
      </main>
    </>
  );
}
