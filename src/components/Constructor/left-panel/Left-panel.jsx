import React from 'react';
import AccordionUi from '../../Ui/Accordion';
import './Left-panel.scss';
export function LeftPanel() {
  const NAME_LABEL = [`common`, `header`, `main`, `footer`];
  // function handleDragStart(evt) {
  //   evt.dataTransfer.setData('text', evt.currentTarget.className);
  // }
  return (
    <>
      <section className={`left-panel`}>
        <h2 className={`left-panel__title`}>components</h2>
        {NAME_LABEL.map((item) => {
          return <AccordionUi key={item} label={item} />;
        })}
      </section>
    </>
  );
}
