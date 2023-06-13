import React from 'react';
import ControlledAccordions from '../../Ui/Accordion';
import './right-panel.scss';

export function RightPanel() {
  return (
    <section className={`right-panel`}>
      <ControlledAccordions />
    </section>
  );
}
