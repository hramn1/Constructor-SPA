import React from 'react';
import { RenderWork } from './renderWork';

export function Node({ it }) {
  const TagName = {
    header: 'header',
    section: 'section',
  };
  return (
    <div style={it.style}>
      {it.type}{' '}
      {it.children.length > 0 ? <RenderWork treeDom={it.children} /> : ''}
    </div>
  );
}
