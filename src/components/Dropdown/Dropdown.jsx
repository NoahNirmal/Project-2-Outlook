import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Dropdown.css'
import { useDispatch } from 'react-redux';
import { trackSidebar } from '../../Redux/action';
import { useEffect } from 'react';

export const Dropdown = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trackSidebar("inbox"));
  }, [dispatch]);

  return (
    <div className='dropdown_conatiner'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: "none", background: "transparent", color: "white", width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Folders
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={expanded === 'panel1' ? 'active' : ''} onClick={() => {
            dispatch(trackSidebar("inbox"));
            setExpanded('panel1');
          }}>inbox</Typography>
          <Typography className={expanded === 'panel2' ? 'active' : ''} onClick={() => {
            dispatch(trackSidebar("spam"));
            setExpanded('panel2');
          }}>spam</Typography>
          <Typography className={expanded === 'panel3' ? 'active' : ''} onClick={() => {
            dispatch(trackSidebar("trash"));
            setExpanded('panel3');
          }}>trash</Typography>
          <Typography>Other folder</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
