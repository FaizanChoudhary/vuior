import { Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container to style the module background and spacing
const WelcomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff", // Background color of the section
  padding: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // minHeight: "70vh", // Adjust height as needed
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
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: 5 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#0F4A3F", fontWeight: "bold", fontSize: 30 }}
            >
              Join For Free!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#0F4A3F", fontWeight: "bold", fontSize: 16 }}
            >
              Your Partner In Financial Empowerment
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "#666", fontSize: 14 }}
            >
              VUIOR is committed to helping individuals and families achieve
              financial stability through innovative debt management solutions
              and household bill consolidation programs. Join our community
              today and take the first step towards a brighter financial future.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onClick={() =>
                window.open("https://add.vuior.com/user/register", "_blank")
              }
            >
              Sign Up Now
            </Button>
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6}>
          <ImageContainer data-aos="fade-up">
            <img src="/assets/new/join-us.png" alt="Financial Empowerment" />
          </ImageContainer>
        </Grid>
      </Grid>
    </WelcomeContainer>
  );
};

export default WelcomeSection;
