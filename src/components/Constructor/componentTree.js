import React from 'react';

let obj;
let id = 0;

export function setDragComponent(currentComp) {
  id++;
  obj = {
    id: id,
    style: currentComp.css,
    type: currentComp.area,
    label: currentComp.label,
    parent: null,
    children: [],
  };
}

export function componentTree() {
  return obj;
}
