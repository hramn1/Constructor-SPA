import {Link} from "react-router-dom";
import React from "react";
import ControlledAccordions from "../Ui/Accordion";

export function RightPanel () {
  return (
    <>
      <section className={'right-panel'}>
        <ControlledAccordions />
      </section>
    </>
  )
}
