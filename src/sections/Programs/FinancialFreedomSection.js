import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container for the section
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  // padding: theme.spacing(4),
  marginTop: "-6px !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Image container to handle responsive behavior
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative", // For positioning gradient overlay
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%", // Adjust width for small screens
      height: "auto",
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: "50%", // Start gradient from the center for fade effect
    background: "linear-gradient(to left, transparent, #e6f4f1 100%)",
    zIndex: 1, // Ensure gradient is over the image
  },
}));

const FinancialFreedomSection = () => {
  return (
    <SectionContainer>
      <Grid container alignItems="center">
        {/* Left side text content */}
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-up"
          sx={{ padding: { xs: 5, sm: 10 }, fontSize: 30 }}
        >
          <Typography variant="h4" gutterBottom>
            Simplifying Finances For Members
          </Typography>
          <Typography variant="body1" gutterBottom fontSize={16}>
            Vuior helps members manage household bills and access flexible
            loans. Our Bill Consolidation Program offers group discounts and
            simplified payments, while our Loan Program provides in-house
            financing options. Join Vuio today and take control of your
            financial future.
          </Typography>
        </Grid>

        {/* Right side image */}
        <Grid item xs={12} md={6}>
          <ImageContainer data-aos="fade-up">
            <img src="/assets/family_image.png" alt="Financial Freedom" />
          </ImageContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default FinancialFreedomSection;
