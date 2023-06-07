import { useState, useCallback, useEffect } from 'react';
import React from 'react';
import './worspace.scss';
import { treeDom } from '../../Templates/mock';
import { RenderWork } from '../renderWork';
import { componentTree, setDragComponent } from '../componentTree';

export function Workspace() {
  let [cops, setCops] = useState([]);

  function handleDrop(evt) {
    setCops((comps) => [...comps, componentTree()]);
  }

  return (
    <section
      className={'workspace-container'}
      onDragOver={(evt) => {
        evt.preventDefault();
      }}
      onDrop={handleDrop}
    >
      <RenderWork treeDom={cops} />
    </section>
  );
}
