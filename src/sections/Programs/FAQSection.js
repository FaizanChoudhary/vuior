import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

// Custom Container for FAQ Section
const FaqsSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f9f9", // Subtle background color
  borderRadius: "10px",
  marginTop: 20,
  marginBottom: 20,
  padding: theme.spacing(8, 4),
}));

// Styled Accordion for cleaner and interactive design
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  marginBottom: theme.spacing(2), // Space between accordions
  borderRadius: "8px",
  "&:hover": {
    transform: "translateY(-2px)", // Lift on hover
    transition: "transform 0.3s ease",
  },
}));

// Accordion Summary styling
const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: "#E6F4F1", // Light teal background
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
  },
  "& .MuiSvgIcon-root": {
    color: "#004d40", // Icon color
  },
}));

// Accordion Details styling
const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FaqsSection>
      <Grid container spacing={4}>
        {/* Left column - Image */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img
              src="/assets/program_faq.png"
              alt="FAQ"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        {/* Right column - FAQs */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#004d40",
              textAlign: "center",
              marginBottom: 3,
            }}
          >
            FAQs
          </Typography>

          {/* FAQ 1 */}
          <StyledAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                What is Vuior's commitment to diversity, equity, and inclusion?
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography variant="body1">
                vuior is dedicated to fostering an inclusive environment where
                all members feel valued and supported. Our programs are designed
                to meet the diverse needs of our community, and we actively
                promote equity in all our practices.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>

          {/* FAQ 2 */}
          <StyledAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                What types of loans does Vuior offer?
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography variant="body1">
                vuior offers a variety of loans, including Auto Loans, Mortgage
                Loans, Unemployment Loans, Student Loans, Travel Loans, Wedding
                Loans, Home Improvement Loans, Health Care Loans, Emergency
                Loans, and Personal Loans.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>

          {/* FAQ 3 */}
          <StyledAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                What types of bills can be consolidated?
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography variant="body1">
                You can consolidate various household bills, including
                Mortgage/Rent, Utilities, Internet/Cable, Phone/Cellular,
                Insurance, and Transportation expenses.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>

          {/* FAQ 4 */}
          <StyledAccordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                How can I contact Vuior for more information?
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography variant="body1">
                You can contact us through our website's contact form, email us
                at info@vuior.com , or call our customer service hotline at
                1-800-123-4567. Our team is here to assist you with any
                questions or concerns.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        </Grid>
      </Grid>
    </FaqsSection>
  );
};

export default FAQSection;
