import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQItem = ({ question, answer }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{question}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{answer}</Typography>
    </AccordionDetails>
  </Accordion>
);

export default FAQItem;
