import React from "react";
import {treeDom} from "../../mock"
import {Node} from  "./Node"
export function RenderWork ({treeDom}) {
    return (
      <>
        {treeDom.map((it)=>{
          return (
           <Node
           it={it}
           />
          )
        }
          )}
      </>
    )
}
