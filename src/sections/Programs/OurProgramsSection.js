import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Section container for the whole section background
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: "linear-gradient(135deg, #f8f8f8 0%, #e8f7f0 100%)",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

// Card container with shadow and rounded corners
const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: theme.spacing(2),
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  margin: theme.spacing(4, 0),
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: theme.spacing(2),
  },
}));
// Image container to handle responsive behavior and shape
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexBasis: "50%",
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: theme.spacing(2), // Image corner radius
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(2),
  },
}));

// Text content container
const TextContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  flexBasis: "50%",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1, 0),
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

// Shaped background behind each card (optional)
const BackgroundShape = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  width: "30%",
  backgroundColor: "#e6f4f1", // Light green for shape
  borderRadius: "50%", // Shape style
  zIndex: -1, // Keep it behind the card
}));

const OurProgramsSection = () => {
  return (
    <SectionContainer>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
        data-aos="fade-up"
      >
        Our Programs
      </Typography>

      {/* First Program - Household Bills Consolidation */}
      <Box sx={{ position: "relative" }}>
        <BackgroundShape />
        <CardContainer data-aos="fade-up">
          {/* Image on the left */}
          <ImageContainer>
            <img
              src="/assets/loan_program.png"
              alt="Household Bills Consolidation"
            />
          </ImageContainer>

          {/* Text on the right */}
          <TextContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Household Bills Consolidation Program
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ lineHeight: 1.8 }}>
              Save up to 25% on your household bills with Vuoir's
              group-negotiated discounts through top-tier providers. Our
              member-driven program continuously adapts to meet your needs,
              delivering innovative and relevant services. Become a Vuoir member
              and experience our dedication to diversity, equity, and inclusion,
              focusing on your needs and building a strong, supportive
              community. Schedule a free consultation today!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                "&:hover": {
                  transform: "scale(1.01)",
                },
                transition: "transform 0.3s ease-in-out",
              }}
            >
              Learn More
            </Button>
          </TextContent>
        </CardContainer>
      </Box>

      {/* Second Program - Loan Programs */}
      <Box sx={{ position: "relative" }}>
        <BackgroundShape
          sx={{ left: 0, right: "auto", transform: "scaleX(-1)" }}
        />
        <CardContainer data-aos="fade-up">
          {/* Image on the right */}
          <ImageContainer>
            <img src="/assets/loan_program.png" alt="Loan Programs" />
          </ImageContainer>

          {/* Text on the left */}
          <TextContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Loan Programs
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ lineHeight: 1.8 }}>
              Unlock the financial support you need with Vuoir's member-focused
              loan programs. Designed to cater to all credit profiles, our loan
              options provide flexible terms, competitive rates, and quick
              approval. With in-house and special financing, we ensure
              personalized solutions for every member. Join Vuoir and take
              advantage of our commitment to diversity, equity, and inclusion.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                "&:hover": {
                  transform: "scale(1.01)",
                },
                transition: "transform 0.3s ease-in-out",
              }}
            >
              Learn More
            </Button>
          </TextContent>
        </CardContainer>
      </Box>
    </SectionContainer>
  );
};

export default OurProgramsSection;
