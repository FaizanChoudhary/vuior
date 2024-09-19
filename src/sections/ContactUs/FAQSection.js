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
    question: "How do I access or update my personal information?",
    answer:
      "You can access and update your personal information by logging into your vuior account or contacting our customer service team.",
  },
  {
    id: "How can I contact vuior for more information?",
    question: "What types of loans does Vuior offer?",
    answer:
      "You can contact us through our website's contact form, email us at info@vuior.com , or call our customer service hotline at 1-800-123-4567. Our team is here to assist you with any questions or concerns.",
  },
  {
    id: "panel3",
    question: "How does vuior protect my personal information?",
    answer:
      "vuior is committed to protecting your privacy. We implement strict security measures to safeguard your personal information and comply with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Please refer to our Privacy Notice for detailed information.",
  },
  {
    id: "panel4",
    question:
      "Where can I find vuior's Terms and Conditions and Privacy Notice ?",
    answer:
      "Our Terms and Conditions and Privacy Notice are available on our website. We encourage all members to review these documents to understand their rights and responsibilities.",
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
              src="/assets/faqs.jpg" // Path to your image
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
