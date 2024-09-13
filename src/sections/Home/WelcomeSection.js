import { Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container to style the module background and spacing
const WelcomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff", // Background color of the section
  padding: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "70vh", // Adjust height as needed
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

// Image container with gradient fade from the left
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  img: {
    width: "100%",
    height: "auto",
    maxHeight: "600px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "300px",
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent 50%)",
    zIndex: 1, // Ensure the gradient is on top of the image
  },
}));

const WelcomeSection = () => {
  return (
    <WelcomeContainer>
      <Grid container spacing={4} alignItems="center">
        {/* Left Column - Text Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ zIndex: 2, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Welcome To Vuior!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#004d40", fontWeight: "bold" }}
            >
              Your Partner In Financial Empowerment
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "#666" }}>
              Vuior is committed to helping individuals and families achieve
              financial stability through innovative debt management solutions
              and household bill consolidation programs. Join our community
              today and take the first step towards a brighter financial future.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Sign Up Now
            </Button>
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6}>
          <ImageContainer>
            <img src="/assets/welcome_image.png" alt="Financial Empowerment" />
          </ImageContainer>
        </Grid>
      </Grid>
    </WelcomeContainer>
  );
};

export default WelcomeSection;
