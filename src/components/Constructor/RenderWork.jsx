import React, { useContext } from 'react';
import { Node } from './Node';
import { Context } from "../Context/Context.js";
export function RenderWork({ treeDom }) {
  const value = useContext(Context)

  return (
    <>
      {treeDom.map((it) => {
        return <Node key={it.id} it={it} />;
      })}
    </>
  );
}
