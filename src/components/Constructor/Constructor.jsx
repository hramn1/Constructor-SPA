import React from "react";
import ResponsiveAppBar from "../Ui/ResponsiveAppBar";
import {LeftPanel} from "./Left-panel";
import {Workspace} from "./Worlspace";
import "./consructor.scss";
import {RightPanel} from "./Right-panel";

export function Constructor () {
  return (
    <>
        <ResponsiveAppBar />
      <main className={"main-page"}>
        <LeftPanel />
        <Workspace />
        <RightPanel />
      </main>
    </>

  )
}
