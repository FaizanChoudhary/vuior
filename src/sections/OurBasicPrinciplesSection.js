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

const FaqsSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const OurBasicPrinciplesSection = () => {
  return (
    <SectionContainer>
      <Grid container spacing={4}>
        {/* Left Column - Basic Principles */}
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <FaqsSection>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#004d40" }}
            >
              FAQs
            </Typography>
            {/* FAQ 1 */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  How do I sign up for Vuior?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Simply click on the "Sign Up" button and fill out the
                  registration form. Fund your account with a minimum balance of
                  $25 to activate your membership.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* FAQ 2 */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  What is Vuior?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Vuior is a platform that provides financial tools and services
                  to help individuals and families achieve financial stability
                  and independence.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* FAQ 3 */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  How do I become a member of Vuior?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  To become a member of Vuior, simply sign up on our website and
                  activate your account by depositing the minimum balance
                  required.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* FAQ 4 */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  What are the benefits of Vuior membership?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Vuior members enjoy exclusive financial services, personalized
                  advice, and access to a supportive community focused on
                  financial well-being.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </FaqsSection>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default OurBasicPrinciplesSection;
