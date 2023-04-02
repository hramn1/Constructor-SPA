import {Link} from "react-router-dom";
import React from "react";
import AccordionUi from "../Ui/Accordion";

export function LeftPanel () {
  const NAME_LABEL = ["common", "header", "main", 'footer']
  function handleDragStart(evt){
    evt.dataTransfer.setData('text', evt.currentTarget.className);
  }
  return (
    <>
    <section className={'left-panel'}>
      {NAME_LABEL.map((item)=> {
        return(
        <AccordionUi
          key={item}
          label={item} />
        )}
      )}

    </section>
    </>
  )
}
