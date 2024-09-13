import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container for the section
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8),
  backgroundColor: "#e6f4f1",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
}));

// Image container to handle responsive behavior
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  img: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
    maxHeight: "600px",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

const FinancialFreedomSection = () => {
  return (
    <SectionContainer>
      <Grid container spacing={4} alignItems="center">
        {/* Left side text content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Get Financial Freedom With Our Expertise
          </Typography>
          <Typography variant="h4" gutterBottom>
            Debt Relief Programs
          </Typography>
          <Typography variant="body1" gutterBottom>
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
          <ImageContainer>
            <img src="/assets/family_image.png" alt="Financial Freedom" />
          </ImageContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default FinancialFreedomSection;
