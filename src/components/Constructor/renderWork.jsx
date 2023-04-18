import React from "react";
import {treeDom} from "../../mock"

export function RenderWork () {
    return (
      <>
        {treeDom.map((it)=>{
          return (
            <div></div>
          )
        }
          )}
      </>
    )
}
