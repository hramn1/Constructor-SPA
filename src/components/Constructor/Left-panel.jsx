import {Link} from "react-router-dom";
import React from "react";
import ControlledAccordions from "../Ui/Accordion";

export function LeftPanel () {
  function handleDragStart(evt){
    evt.dataTransfer.setData('text', evt.currentTarget.className);
  }
  return (
    <>
    <section className={'left-panel'}>
      <ControlledAccordions />
      <p className={"drag-title"}
        draggable={true}
        onDragStart={handleDragStart}
        onDragEnd={(evt)=>{

        }}
        >Заголовок</p>
    </section>
    </>
  )
}
