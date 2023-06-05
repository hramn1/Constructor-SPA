import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { arrBtnArea } from '../Constructor/components-drag/generate-button-drag';
import { GenerateBtn } from '../Constructor/components-drag/generateBtn';

export default function AccordionUi({ label }) {
  return (
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant='h5' className={'accordion-title'}>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {arrBtnArea
          .filter((item) => item.area === label)
          .map((item) => (
            <GenerateBtn key={item.className} protoObj={item} />
          ))}
      </AccordionDetails>
    </Accordion>
  );
}
