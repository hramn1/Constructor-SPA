import {Link} from "react-router-dom";
import React from "react";
import ControlledAccordions from "../Ui/Accordion";

export function LeftPanel () {
  return (
    <>
    <section className={'left-panel'}>
      <ControlledAccordions />
      <p
        draggable={true}
        onDrag={(e)=>{}}
        onDrop={(e)=>{
          console.log(e)
        }}
        onDragEnd={(e)=>{
          console.log(e)
        }}
        >Заголовок</p>
    </section>
    </>
  )
}
