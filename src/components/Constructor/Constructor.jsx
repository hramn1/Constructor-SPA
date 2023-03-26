import React from "react";
import ResponsiveAppBar from "../Ui/ResponsiveAppBar";
import {LeftPanel} from "./Left-panel";
import {Workspace} from "./Worlspace";
import "./consructor.scss";

export function Constructor () {
  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>
      <main className={"main-page"}>
        <LeftPanel />
        <Workspace />
      </main>
    </>

  )
}
