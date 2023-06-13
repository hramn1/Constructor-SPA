import React from 'react';
import {Node} from './Node';
import PropTypes from 'prop-types';
export function RenderWork({treeDom}) {
  return (
    <>
      {treeDom.map((it) => {
        return <Node key={it.id} elem={it} />;
      })}
    </>
  );
}
RenderWork.propTypes = {
  treeDom: PropTypes.array
};
