import {useState, useContext} from 'react';
import React from 'react';
import './worspace.scss';
import {RenderWork} from '../RenderWork';
import {ComponentTree} from '../ComponentTree';
import {Context} from "../../Context/Context";

export function Workspace() {
  let dd = useContext(Context)
  if(!dd){
    dd = []
  }
  let [cops, setCops] = useState(dd);

  function handleDrop() {
    setCops((comps) => [...comps, ComponentTree()]);
  }

  return (
    <section
      className={`workspace-container`}
      onDragOver={(evt) => {
        evt.preventDefault();
      }}
      onDrop={handleDrop}
    >
      <RenderWork treeDom={cops} />
    </section>
  );
}
