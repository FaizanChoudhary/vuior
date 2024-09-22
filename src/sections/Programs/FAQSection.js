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
    question: "What is VUIOR's commitment to diversity, equity, and inclusion?",
    answer:
      "VUIOR is dedicated to fostering an inclusive environment where all members feel valued and supported. Our programs are designed to meet the diverse needs of our community, and we actively promote equity in all our practices.",
  },
  {
    id: "panel2",
    question: "What types of loans does VUIOR offer?",
    answer:
      "VUIOR offers a variety of loans, including Auto Loans, Mortgage Loans, Unemployment Loans, Student Loans, Travel Loans, Wedding Loans, Home Improvement Loans, Health Care Loans, Emergency Loans, and Personal Loans.",
  },
  {
    id: "panel3",
    question: "What types of bills can be consolidated?",
    answer:
      "You can consolidate various household bills, including Mortgage/Rent, Utilities, Internet/Cable, Phone/Cellular, Insurance, and Transportation expenses.",
  },
  {
    id: "panel4",
    question: "How can I contact VUIOR for more information?",
    answer:
      "You can contact us through our website's contact form, email us at info@vuior.com, or call our customer service hotline at 1-800-123-4567. Our team is here to assist you with any questions or concerns.",
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
              src="/assets/program_faq.png" // Path to your image
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
