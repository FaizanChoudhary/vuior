import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Container for each accordion item
const AccordionContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds shadow
  overflow: "hidden",
}));

// Header for the accordion (question part)
const AccordionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
}));

// Content for the accordion (answer part) with smooth height transition
const AccordionContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "expanded",
})(({ expanded }) => ({
  maxHeight: expanded ? "500px" : "0px",
  padding: expanded ? "16px" : "0px",
  backgroundColor: "#fff",
  overflow: "hidden",
  transition: "0.6s ease-in-out", // Smooth transition for height and padding
  boxShadow: expanded ? "inset 0px 0px 10px rgba(0, 0, 0, 0.05)" : "none", // Soft inner shadow
}));

const FAQAccordion = ({ faqs }) => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <Box>
      {faqs.map((faq) => (
        <AccordionContainer key={faq.id}>
          <AccordionHeader onClick={() => handleToggle(faq.id)}>
            <Typography
              sx={{ fontWeight: expanded === faq.id ? "bold" : "normal" }}
            >
              {faq.question}
            </Typography>
            <ExpandMoreIcon
              sx={{
                transition: "transform 0.3s ease",
                transform: expanded === faq.id ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </AccordionHeader>
          <AccordionContent expanded={expanded === faq.id}>
            <Typography variant="body1">{faq.answer}</Typography>
          </AccordionContent>
        </AccordionContainer>
      ))}
    </Box>
  );
};
export default FAQAccordion;
