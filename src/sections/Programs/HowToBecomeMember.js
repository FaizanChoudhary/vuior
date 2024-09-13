import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container for the whole section
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: "#e6f4f1", // Light green background for the section
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 2),
  },
}));

// Each Step Card Container
const StepCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff", // White background for cards
  borderRadius: theme.spacing(2), // Rounded corners
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for card effect
  padding: theme.spacing(4),
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

// Circle for the step number
const StepNumber = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  backgroundColor: "#004d40", // Dark green for the circle
  color: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  fontWeight: 600,
  margin: "auto",
  marginBottom: theme.spacing(2),
}));

const HowToBecomeMember = () => {
  return (
    <SectionContainer>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        How To Become A Member
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Step 1: Sign Up */}
        <Grid item xs={12} md={4}>
          <StepCard>
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
            <Typography variant="body1">
              Joining Vuoir is simple. Click on the "Join Now" button to start
              your membership application.
            </Typography>
          </StepCard>
        </Grid>

        {/* Step 2: Fund Your Account */}
        <Grid item xs={12} md={4}>
          <StepCard>
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
            <Typography variant="body1">
              To activate your membership, fund your account with a minimum
              balance of $25. This ensures your membership remains active and
              grants you access to all our services.
            </Typography>
          </StepCard>
        </Grid>

        {/* Step 3: Enjoy The Benefits */}
        <Grid item xs={12} md={4}>
          <StepCard>
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
            <Typography variant="body1">
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
