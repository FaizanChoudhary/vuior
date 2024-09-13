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

// Custom Container for FAQ Section
const FAQContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  marginTop: 20,
  marginBottom: 20,
  padding: theme.spacing(8, 4),
  borderRadius: theme.spacing(2),
}));

// Styled Accordion to match the clean look
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:before": {
    display: "none",
  },
}));

const FAQSection = () => {
  return (
    <FAQContainer>
      <Grid container spacing={4}>
        {/* Left column - Image */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img
              src="/assets/program_faq.png"
              alt="FAQ Image"
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
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            FAQs
          </Typography>

          <StyledAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                What is vuior's commitment to diversity, equity, and inclusion?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vuoir is committed to ensuring diversity, equity, and inclusion
                in all of its programs...
              </Typography>
            </AccordionDetails>
          </StyledAccordion>

          <StyledAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>What types of loans does vuior offer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vuoir offers a range of loans, including personal, auto, and
                home equity loans...
              </Typography>
            </AccordionDetails>
          </StyledAccordion>

          <StyledAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>What types of bills can be consolidated?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can consolidate various household bills, including
                mortgage/rent, utilities, internet/cable, phone, and more.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>

          <StyledAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>
                How can I contact vuior for more information?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can contact us via phone, email, or by visiting our
                website’s contact section...
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </Grid>
      </Grid>
    </FAQContainer>
  );
};

export default FAQSection;
