import React from "react";

let obj
let id = 0;
export function setDragComponent(cureentComp) {
  id++
   obj = {
    'id': id,
    type: cureentComp.area,
    parent: null,
    children: []
  }

}
export function componentTree() {
  return obj
}



