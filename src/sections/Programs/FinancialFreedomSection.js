import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container for the section
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  // padding: theme.spacing(4),
  marginTop: "60px !important",
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
            Get Financial Freedom With Our Expertise Debt Relief Programs
          </Typography>
          <Typography variant="body1" gutterBottom fontSize={16}>
            Achieve financial freedom by utilizing our professional debt
            reduction solutions, which are intended to lessen your financial
            obligations and clear the path to a stable future. Our skilled
            experts provide individualized solutions, such as debt
            consolidation, creditor negotiation, and thorough financial
            counselling, that are catered to your particular financial
            circumstances. We give you the instruments and tactics required to
            properly manage and pay down your debt, together with continuing
            guidance and instruction to guarantee long-term success.
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
