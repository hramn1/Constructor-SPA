import { useState, useCallback, useEffect } from 'react';
import React from 'react';
import './worspace.scss';
import { treeDom } from '../../mock';
import { RenderWork } from './renderWork';
import { componentTree, setDragComponent } from './componentTree';

export function Workspace() {
  let [cops, setCops] = useState([]);

  function handleDrop(evt) {
    setCops((dd) => [...dd, componentTree()]);
  }

  return (
    <section
      className={'workspace-container'}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={handleDrop}
    >
      <RenderWork treeDom={cops} />
    </section>
  );
}
