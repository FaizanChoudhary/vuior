import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import FAQAccordion from "../../components/FAQAccordion";

// Custom Container for FAQ Section
const FaqsSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  borderRadius: "10px",
  marginTop: 20,
  marginBottom: 20,
  padding: theme.spacing(8, 4),
}));

const faqs = [
  {
    id: "panel1",
    question: "What types of loans does vuior offer ?",
    answer:
      "vuior offers a variety of loans, including Auto Loans, Mortgage Loans, Unemployment Loans, Student Loans, Travel Loans, Wedding Loans, Home Improvement Loans, Health Care Loans, Emergency Loans, and Personal Loans.",
  },
  {
    id: "panel2",
    question: "Do you offer loans to individuals with poor credit ?",
    answer:
      "Yes, vuior welcomes all credit profiles. We offer in-house financing and special financing options to provide flexibility and support to our members.",
  },
  {
    id: "panel3",
    question: "How do you ensure compliance with US laws and regulations?",
    answer:
      "vuior adheres to all applicable federal and state laws and regulations. Our loan programs are designed to comply with the Truth in Lending Act (TILA), Equal Credit Opportunity Act (ECOA), and Fair Credit Reporting Act (FCRA), among others. We ensure transparency and fairness in all our lending practices.",
  },
  {
    id: "panel4",
    question: "What documents are required to apply for a loan ?",
    answer:
      "You will need to provide bank statements, proof of income, and proof of residence. Additional documentation may be required depending on the type of loan you are applying for.",
  },
];

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
          <Box data-aos="fade-up">
            <img
              src="/assets/loanfaq.png" // Path to your image
              alt="FAQ"
              style={{
                width: "100%",
                maxHeight: 500,
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </Box>
        </Grid>

        {/* Right column - FAQs */}
        <Grid item xs={12} md={6}>
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
                width: "10%",
                margin: "0",
                borderBottom: "3px solid #23AB84",
              }}
            />
          </Box>
          <Box mt={5}>
            <FAQAccordion
              expanded={expanded}
              handleChange={handleChange}
              faqs={faqs}
            />
          </Box>
        </Grid>
      </Grid>
    </FaqsSection>
  );
};

export default FAQSection;
