import React from "react";
import "./worspace.scss";
import {treeDom} from "../../mock";
import {RenderWork} from "./renderWork";
export function Workspace() {
  function handleDrop(evt) {
    let liFirst = document.createElement('h1');
    liFirst.textContent = "Заголовок"
    evt.currentTarget.append(liFirst)
  }

  return (
    <section
      className={'workspace-container'}

      onDragOver={(e) => {
        e.preventDefault()
      }}
      onDrop={handleDrop}
    >
      <RenderWork
        treeDom={treeDom}
      />
    </section>
  )
}
