import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import FAQAccordion from "../../components/FAQAccordion";

// Container for the whole section
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1", // light background
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

const PrinciplesSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: theme.spacing(4),
}));

// Styling for the FAQ section
const FaqsSection = styled(Box)(({ theme }) => ({
  // backgroundColor: "#f9f9f9", // Subtle background color
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

const faqs = [
  {
    id: "panel1",
    question: "How do I sign up for Vuior?",
    answer:
      'Simply click on the "Sign Up" button and fill out the registration form. Fund your account with a minimum balance of $25 to activate your membership.',
  },
  {
    id: "panel2",
    question: "What is Vuior?",
    answer:
      "Vuior is a platform that provides financial tools and services to help individuals and families achieve financial stability and independence.",
  },
  {
    id: "panel3",
    question: "How do I become a member of Vuior?",
    answer:
      "To become a member of Vuior, simply sign up on our website and activate your account by depositing the minimum balance required.",
  },
  {
    id: "panel4",
    question: "What are the benefits of Vuior membership?",
    answer:
      "Vuior members enjoy exclusive financial services, personalized advice, and access to a supportive community focused on financial well-being.",
  },
];

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
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
                fontSize={30}
              >
                Our Basic Principles
              </Typography>
              <Box
                sx={{
                  width: "90%",
                  margin: "0",
                  mt: "5px",
                  borderBottom: "3px solid #23AB84",
                }}
              />
            </Box>

            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2, fontSize: 16 }}
            >
              Financial security and safety for our clients
            </Typography>
            <Typography variant="body1" paragraph fontSize={14}>
              1. <strong>Empowerment</strong> : By giving you the necessary
              resources and tools to manage your journey, we enable you to take
              control of your financial future.
            </Typography>
            <Typography variant="body1" paragraph fontSize={14}>
              2. <strong>Innovation</strong> : Vuior thrives on innovation,
              leveraging cutting-edge technology to create efficient and
              effective solutions for our users.
            </Typography>
            <Typography variant="body1" paragraph fontSize={14}>
              3. <strong>Community</strong> : The fundamental unit of Vuior is
              its community. Together, we establish a nurturing atmosphere
              wherein financial prosperity is reciprocated.
            </Typography>
            <Typography variant="body1" paragraph fontSize={14}>
              4. <strong>Transparency</strong> : We believe in transparency.
              From our services to our company culture, we aim to be open and
              honest in everything we do.
            </Typography>
          </PrinciplesSection>
        </Grid>

        {/* Right Column - FAQ Section */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <FaqsSection>
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
                fontSize={30}
              >
                FAQs
              </Typography>
              <Box
                sx={{
                  width: "90%",
                  margin: "0",
                  borderBottom: "3px solid #23AB84",
                }}
              />
            </Box>
            {/* FAQ 1 */}
            <Box mt={2}>
              <FAQAccordion
                expanded={expanded}
                handleChange={handleChange}
                faqs={faqs}
              />
            </Box>
          </FaqsSection>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default OurBasicPrinciplesSection;
