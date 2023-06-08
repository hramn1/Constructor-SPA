import React from 'react';
import {useLocation} from 'react-router-dom';
import ResponsiveAppBar from '../Ui/ResponsiveAppBar';
import {LeftPanel} from './left-panel/Left-panel';
import {Workspace} from './workspace/Workspace';
import './consructor.scss';
import {RightPanel} from './right-panel/Right-panel';
import {Context} from '../Context/Context';

export function Constructor() {
  const {state} = useLocation();
  const {context} = state || {};
  return (
    <>
      <ResponsiveAppBar />
      <main className={`main-page`}>
        <LeftPanel />
        <Context.Provider value={context}>
          <Workspace />
        </Context.Provider>
        <RightPanel />
      </main>
    </>
  );
}
