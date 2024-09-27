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
    question: "What is the Household Bill Consolidation Program ?",
    answer:
      "This program offers group-negotiated discounts through partnerships with highly-rated carriers and providers,helping you save on your household bills by consolidating them into a single manageable payment.",
  },
  {
    id: "panel2",
    question:
      "How do you ensure compliance with US laws and regulations for this program?",
    answer:
      "VUIOR complies with all relevant regulations, including the Fair Debt Collection Practices Act (FDCPA) and the Federal Trade Commission (FTC) guidelines. We ensure that our bill consolidation services are transparent, fair, and in the best interest of our members.",
  },
  {
    id: "panel3",
    question: "How much can I save through this program ?",
    answer:
      "Members can save up to 25% on their household bills through our negotiated group discounts.",
  },
  {
    id: "panel4",
    question:
      "What are the eligibility requirements for the Household Bill Consolidation Program?",
    answer:
      "Eligibility requirements include providing proof of residence, proof of income, and information about your current bills. We welcome all credit profiles and offer flexible payment options.",
  },
  {
    id: "panel5",
    question: "What types of bills can be consolidated ?",
    answer:
      "You can consolidate various household bills, including Mortgage/Rent, Utilities, Internet/Cable, Phone/Cellular, Insurance, and Transportation expenses.",
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
              src="/assets/call-image.png" // Path to your image
              alt="FAQ"
              style={{
                width: "100%",
                maxHeight: 500,
                objectFit: "contain",
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
