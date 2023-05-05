import React from 'react';
import { Node } from './Node';

export function RenderWork({ treeDom }) {
  return (
    <>
      {treeDom.map((it) => {
        return <Node key={it.id} it={it} />;
      })}
    </>
  );
}
