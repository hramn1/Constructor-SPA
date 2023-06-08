import React from 'react';
import {setDragComponent} from '../ComponentTree';
import PropTypes from 'prop-types';
export function GenerateBtn({protoObj}) {
  return (
    <p
      draggable={true}
      onDragStart={() => {
        setDragComponent(protoObj);
      }}
      onDragEnd={() => {}}
    >
      {protoObj.label}
    </p>
  );
}
GenerateBtn.propTypes = {
  protoObj: PropTypes.object
};
