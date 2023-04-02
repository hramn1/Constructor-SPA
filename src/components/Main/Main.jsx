import React from 'react';
import {Link} from "react-router-dom";
export function Main () {
//   return (
//     <>
//       <h1>Главная</h1>
//       <Link to="constructor">Констрктор</Link>
//     </>
//   )
// }
  const [ dragOver, setDragOver ] = React.useState(false);
  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
    console.log(event.dataTransfer.getData('text'));

  }
  const enableDropping = (event) => {
    event.preventDefault();
  }

  const handleDrop = (event) => {
    const id = event.dataTransfer.getData('text');
    console.log(`Somebody dropped an element with id: ${id}`);
    setDragOver(false);
  }
  return (
    <div>
      <div id="d1" draggable="true" onDragStart={handleDragStart}>Drag me</div>
      <div id="d2" draggable="true" onDragStart={handleDragStart}>... Or me!</div>
      <div
        onDragOver={enableDropping}
        onDrop={handleDrop}
        onDragEnter={handleDragOverStart}
        onDragLeave={handleDragOverEnd}
        style={ dragOver ? {fontWeight: 'bold', background: 'red'} : {} }
      >
        Drop Zone
      </div>
    </div>
  );
}
