import {Link} from "react-router-dom";
import React from "react";
import "./worslace.scss";


export function Workspace () {
  function handleDrop (evt) {
    let liFirst = document.createElement('h1');
    liFirst.textContent = "Заголовок"
    evt.currentTarget.append(liFirst)
  }
  return (
      <section
        className={'workspace-container'}

        onDragOver={(e)=>{
          e.preventDefault()
        }}
        onDrop={handleDrop}
      >
      </section>
  )
}
