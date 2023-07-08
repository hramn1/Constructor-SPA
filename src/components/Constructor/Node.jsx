import React, { createElement } from 'react';
import {RenderWork} from './RenderWork';
import PropTypes from 'prop-types';
export function Node({elem}) {
  return (
  <div style={elem.style}>
      {elem.type}{``}
      {elem.children.length > 0 ? <RenderWork treeDom={elem.children} /> : ``}
    </div>
  );
}
Node.propTypes = {
  elem: PropTypes.object
};
