import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import "aos/dist/aos.css";
import StepCard from "../../components/StepCard";

// Container for the whole section
const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  backgroundColor: "#e6f4f1", // Light green background for the section
  padding: theme.spacing(8), // paddingY, paddingX
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(3)} ${theme.spacing(2)}`, // smaller paddingY, paddingX for small screens
  },
}));

const steps = [
  // {
  //   stepNumber: 1,
  //   title: "Free Sign Up",
  //   description:
  //     "Join us for free and easy to use household bill consolidation program. Simply sign up on our secure platform to get started.",
  //   imgSrc: "/assets/freesignup.png",
  //   alt: "Sign Up",
  // },
  {
    stepNumber: 1,
    title: "Bill Assessment",
    description:
      "Our team of expert and professional members will review your existing household bills, including utilities, insurance, and many more to identify potential areas for saving.",
    imgSrc: "/assets/billassesment.png",
    alt: "Fund Your Account",
  },
  {
    stepNumber: 2,
    title: "Negotiation",
    description:
      "We negotiate with your bill providers to secure lower rates, reduce fees and better terms. Our main purpose is to maximize your saving.",
    imgSrc: "/assets/negotiation.png",
    alt: "Enjoy the Benefits",
  },
  {
    stepNumber: 3,
    title: "Single Monthly Payment",
    description:
      "Your consolidated bills are combined into a single monthly payment. You’ll make one payment to us and we'll distribute the funds to your bill providers on your behalf.",
    imgSrc: "/assets/monthypayment.png",
    alt: "Payment",
  },
  // {
  //   stepNumber: 5,
  //   title: "Access To Line Of Credit",
  //   description:
  //     "Our qualified participants gain access to a $5000 line of credit, which can be used for household expenses or unexpected bills.",
  //   imgSrc: "/assets/lineofcredit.png",
  //   alt: "Crdeit",
  // },
];

const HowItWorks = () => {
  return (
    <SectionContainer>
      <Box data-aos="fade-up">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={30}
        >
          How it Works
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
          }}
        />
      </Box>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} lg={3} key={index} sx={{ display: "flex" }}>
            <StepCard
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              imgSrc={step.imgSrc}
              alt={step.alt}
            />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default HowItWorks;
