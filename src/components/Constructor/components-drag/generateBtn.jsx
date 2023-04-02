import React from "react";

export function GenerateBtn ({protoObj}) {
  return (
    <p
      draggable={true}
      onDragStart={()=>{}}
      onDragEnd={()=>{}}
    >{protoObj.label}</p>
  )
}
