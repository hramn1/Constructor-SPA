import React from "react";
import {setDragComponent} from '../componentTree'
export function GenerateBtn ({protoObj}) {
  return (
    <p
      draggable={true}
      onDragStart={(evt)=>{
        setDragComponent(protoObj)

      }}
      onDragEnd={()=>{
      }}
    >{protoObj.label}</p>
  )
}
