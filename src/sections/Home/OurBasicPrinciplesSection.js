import {
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { useState } from "react";

// Container for the whole section
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1", // light background
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

const PrinciplesSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

// Styling for the FAQ section
const FaqsSection = styled(Box)(({ theme }) => ({
  // backgroundColor: "#f9f9f9", // Subtle background color
  borderRadius: "10px",
  padding: theme.spacing(3),
}));

// Styling for each FAQ accordion
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  marginBottom: theme.spacing(2), // Space between accordions
  borderRadius: "10px",
  overflow: "hidden", // Hide overflow to make the animation smoother
  transition: "background-color 0.3s ease",
  "&:hover": {
    // No scale effect on hover
  },
}));

// Styling for accordion summary
const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  // backgroundColor: "#E6F4F1", // Light teal background
  borderRadius: "10px",
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    transition: "background-color 0.3s ease",
  },
  // "&:hover": {
  //   backgroundColor: "#cce7e1", // Darker teal on hover
  // },
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

const OurBasicPrinciplesSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <SectionContainer>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Column - Basic Principles */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <PrinciplesSection>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#004d40" }}
            >
              Our Basic Principles
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Financial security and safety for our clients
            </Typography>
            <Typography variant="body1" paragraph>
              1. <strong>Empowerment</strong> : By giving you the necessary
              resources and tools to manage your journey, we enable you to take
              control of your financial future.
            </Typography>
            <Typography variant="body1" paragraph>
              2. <strong>Innovation</strong> : Vuior thrives on innovation,
              leveraging cutting-edge technology to create efficient and
              effective solutions for our users.
            </Typography>
            <Typography variant="body1" paragraph>
              3. <strong>Community</strong> : The fundamental unit of Vuior is
              its community. Together, we establish a nurturing atmosphere
              wherein financial prosperity is reciprocated.
            </Typography>
            <Typography variant="body1" paragraph>
              4. <strong>Transparency</strong> : We believe in transparency.
              From our services to our company culture, we aim to be open and
              honest in everything we do.
            </Typography>
          </PrinciplesSection>
        </Grid>

        {/* Right Column - FAQ Section */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <FaqsSection>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#004d40", textAlign: "center" }}
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
                  How do I sign up for Vuior?
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography variant="body1">
                  Simply click on the "Sign Up" button and fill out the
                  registration form. Fund your account with a minimum balance of
                  $25 to activate your membership.
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
                  What is Vuior?
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography variant="body1">
                  Vuior is a platform that provides financial tools and services
                  to help individuals and families achieve financial stability
                  and independence.
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
                  How do I become a member of Vuior?
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography variant="body1">
                  To become a member of Vuior, simply sign up on our website and
                  activate your account by depositing the minimum balance
                  required.
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
                  What are the benefits of Vuior membership?
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography variant="body1">
                  Vuior members enjoy exclusive financial services, personalized
                  advice, and access to a supportive community focused on
                  financial well-being.
                </Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          </FaqsSection>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default OurBasicPrinciplesSection;
