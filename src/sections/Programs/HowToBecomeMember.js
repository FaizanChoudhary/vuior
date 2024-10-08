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
  padding: `${theme.spacing(8)} ${theme.spacing(20)}`, // paddingY, paddingX
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3), // smaller paddingY, paddingX for small screens
  },
}));

const steps = [
  {
    stepNumber: 1,
    title: "Free Membership",
    description:
      'Joining Vuior is simple. Click on the "Join Now" button to start your membership application.',
    imgSrc: "/assets/freesignup.png",
    alt: "Sign Up",
  },
  {
    stepNumber: 2,
    title: "Fund Your Account",
    description:
      "Fund your account with a minimum balance of $25 to activate your membership.",
    imgSrc: "/assets/fundaccount.png",
    alt: "Fund Your Account",
  },
  {
    stepNumber: 3,
    title: "Enjoy Benefits",
    description:
      "Start taking advantage of Vuior's programs and services immediately after funding your account.",
    imgSrc: "/assets/enjoythebenefits.jpg",
    alt: "Enjoy Benefits",
  },
];

const HowToBecomeMember = () => {
  return (
    <SectionContainer>
      <Box data-aos="fade-up">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={30}
        >
          How To Become A Member
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
          <Grid item xs={12} lg={4} key={index} sx={{ display: "flex" }}>
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

export default HowToBecomeMember;
