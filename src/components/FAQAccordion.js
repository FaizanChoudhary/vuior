import React from "react";
import { styled } from "@mui/material/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Styling for each FAQ accordion
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  marginBottom: theme.spacing(3), // Space between accordions
  borderRadius: 5,
  overflow: "hidden", // Hide overflow to make the animation smoother
  transition: "background-color 0.3s ease",
}));

// Styling for accordion summary
const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: "10px",
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    transition: "background-color 0.3s ease",
  },
  "& .MuiSvgIcon-root": {
    color: "#004d40", // Customize icon color
  },
}));

// Styling for accordion details
const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  overflow: "hidden", // Ensure smooth overflow transition
  transition: "max-height 0.3s ease-in-out",
}));

const FAQAccordion = ({ expanded, handleChange, faqs }) => {
  return (
    <>
      {faqs.map((faq, index) => (
        <StyledAccordion
          key={index}
          expanded={expanded === faq.id}
          onChange={handleChange(faq.id)}
        >
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {faq.question}
            </Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography variant="body1">{faq.answer}</Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </>
  );
};

export default FAQAccordion;
