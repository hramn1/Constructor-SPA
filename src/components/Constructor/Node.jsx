import React from "react";
import {RenderWork} from "./renderWork"
export function Node ({it}) {

  return (
    <div>{it.type}  {(it.children.length>0)?
      <RenderWork
      treeDom={it.children}
    />:""}</div>

  )

}
