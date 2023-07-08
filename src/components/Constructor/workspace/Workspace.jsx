import {useState, useContext} from 'react';
import React from 'react';
import './worspace.scss';
import {RenderWork} from '../RenderWork';
import {componentTree} from '../ComponentTree';
import {Context} from "../../Context/Context";

export function Workspace() {
  let compTemplate = useContext(Context);
  if (!compTemplate) {
    compTemplate = [];
  }
  let [cops, setCops] = useState(compTemplate);
  function handleDrop() {
    setCops((comps) => [...comps, componentTree()]);
  }
  function handleClick(evt){
    evt.target.classList.add('element-selected');
  }

  return (
    <section
      className={`workspace-container`}
      onDragOver={(evt) => {
        evt.preventDefault();
      }}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <RenderWork treeDom={cops} />
    </section>
  );
}
