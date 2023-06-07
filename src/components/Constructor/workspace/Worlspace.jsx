import { useState, useContext, useEffect } from 'react';
import React from 'react';
import './worspace.scss';
import { RenderWork } from '../renderWork';
import { componentTree, setDragComponent } from '../componentTree';
import { Context } from "../../Context/Context";

export function Workspace() {
  let dd = useContext(Context)
  if(!dd){
    dd = []
  }
  let [cops, setCops] = useState(dd);

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
