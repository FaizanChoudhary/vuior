import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Container for the whole section
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: "#e6f4f1", // Light green background for the section
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 2),
  },
}));

// Each Step Card Container with hover effect
const StepCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff", // White background for cards
  borderRadius: theme.spacing(2), // Rounded corners
  minHeight: 550,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for card effect
  padding: theme.spacing(4),
  textAlign: "center",
  transition: "transform 0.3s, box-shadow 0.3s", // Smooth hover effect
  "&:hover": {
    transform: "translateY(-10px)", // Lift card on hover
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

// Circle for the step number with gradient and shadow
const StepNumber = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  background: "linear-gradient(135deg, #004d40, #0e7c61)", // Gradient circle
  color: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  fontWeight: 600,
  margin: "auto",
  marginBottom: theme.spacing(2),
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
}));

const HowToBecomeMember = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <SectionContainer>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
        data-aos="fade-up"
      >
        How To Become A Member
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Step 1: Sign Up */}
        <Grid item xs={12} md={4}>
          <StepCard data-aos="zoom-in" data-aos-duration="500">
            <img
              src="/assets/freesignup.png"
              alt="Sign Up"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <StepNumber>1</StepNumber>
            <Typography variant="h6" gutterBottom>
              Sign Up
            </Typography>
            <Typography variant="body1" gutterBottom>
              Joining Vuoir is simple. Click on the "Join Now" button to start
              your membership application.
            </Typography>
          </StepCard>
        </Grid>

        {/* Step 2: Fund Your Account */}
        <Grid item xs={12} md={4}>
          <StepCard data-aos="zoom-in" data-aos-duration="700">
            <img
              src="/assets/billassesment.png"
              alt="Fund Your Account"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <StepNumber>2</StepNumber>
            <Typography variant="h6" gutterBottom>
              Fund Your Account
            </Typography>
            <Typography variant="body1" gutterBottom>
              To activate your membership, fund your account with a minimum
              balance of $25. This ensures your membership remains active and
              grants you access to all our services.
            </Typography>
          </StepCard>
        </Grid>

        {/* Step 3: Enjoy The Benefits */}
        <Grid item xs={12} md={4}>
          <StepCard data-aos="zoom-in" data-aos-duration="900">
            <img
              src="/assets/negotiation.png"
              alt="Enjoy the Benefits"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <StepNumber>3</StepNumber>
            <Typography variant="h6" gutterBottom>
              Enjoy The Benefits
            </Typography>
            <Typography variant="body1" gutterBottom>
              Once your account is funded, you can immediately start taking
              advantage of Vuoir's programs and services.
            </Typography>
          </StepCard>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default HowToBecomeMember;
