import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Custom Container for the section
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(8, 4),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "60vh",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 2),
    flexDirection: "column",
  },
}));

const WelcomeMembershipSection = () => {
  return (
    <SectionContainer>
      <Grid container spacing={4} alignItems="center">
        {/* Left Column - Text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: "500px" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Welcome To VUIOR Membership
            </Typography>
            <Typography variant="body1" gutterBottom>
              At VUIOR, we believe in empowering our members with the tools and
              support they need to achieve financial well-being. When you become
              a member of VUIOR, you effectively become a part-owner of our
              organization, gaining access to a wealth of benefits and services
              designed to help you thrive.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3, backgroundColor: "#0F4A3F", borderRadius: "25px" }}
            >
              Join For Free
            </Button>
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img
              src="/assets/welcome_membership_image.png" // Replace with actual image path
              alt="Membership"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default WelcomeMembershipSection;
