import React, { useContext } from 'react';
import { Node } from './Node';
import {context} from "../Main/Main";

export function RenderWork({ treeDom }) {
  const value = useContext(context)

  console.log(value)
  return (
    <>
      {treeDom.map((it) => {
        return <Node key={it.id} it={it} />;
      })}
    </>
  );
}
