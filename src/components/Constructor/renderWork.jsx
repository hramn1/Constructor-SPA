import React from "react";
import {useEffect} from "react";
import {Node} from  "./Node";
import {componentTree} from './componentTree'
export function RenderWork ({treeDom, state}) {
  console.log(state)
  console.log(treeDom)

    return (
      <>
        {treeDom.map((it)=>{
          return (
           <Node
           key={it.id}
           it={it}
           />
          )
        }
          )}
      </>
    )
}
