import { Grid, Typography, Button, CardMedia, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";
import BGTopRight from "../../components/BGTopRight";
import BGBottomLeft from "../../components/BGBottomLeft";

// Styling for the container
const ProgramsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

// Styling for individual program cards
const ProgramCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  height: "100%",
  "&:hover .overlay": {
    opacity: 1,
    transform: "translateY(0)", // Overlay slides up
  },
  "&:hover .heading-on-image": {
    opacity: 0, // Heading fades out
  },
}));

const CardImage = styled(CardMedia)({
  height: "100%",
  objectFit: "cover",
});

const HeadingOnImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  textAlign: "center",
  zIndex: 1,
  width: "100%",
  padding: theme.spacing(2),
  // backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly dark background for text readability
  transition: "opacity 0.3s ease", // Smooth fade-out effect
  backgroundColor: "rgba(0, 77, 64, 0.5)",
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 77, 64, 0.7)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transform: "translateY(100%)", // Start below the view
  transition: "opacity 0.3s ease, transform 0.3s ease",
  padding: theme.spacing(4),
  borderRadius: "20px",
}));

const OverlayContent = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.3s ease", // Smooth zoom effect
  "&:hover": {
    transform: "scale(1.1)", // Zoom in effect
  },
}));

const ProgramsSection = () => {
  return (
    <ProgramsContainer>
      <BGTopRight src="/assets/backgrounds/bg1-top-right.png" />
      <BGBottomLeft src="/assets/backgrounds/bg1-bottom-left.png" />
      <Box data-aos="fade-up">
        <Typography variant="h4" fontWeight="bold" color="primary">
          Our Programs
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
          }}
        />
      </Box>

      <Grid container spacing={2} mt={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: "600px" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <ProgramCard>
            <CardImage
              component="img"
              image="/assets/loan.jpg"
              alt="Loan Programs"
            />
            <HeadingOnImage className="heading-on-image">
              <Typography variant="h4">Loan Programs</Typography>
            </HeadingOnImage>
            <Overlay className="overlay">
              <OverlayContent>
                <Typography variant="h4" gutterBottom>
                  More About This Program
                </Typography>
                <Typography variant="body1" paragraph>
                  Unlock the financial support you need with Vuior's
                  member-focused loan programs. Designed to cater to all credit
                  profiles, our loan options provide flexible terms, competitive
                  rates, and quick approval. With in-house and special
                  financing, we ensure personalized solutions for every member.
                </Typography>
                <LearnMoreButton variant="contained" color="primary">
                  Learn More <ArrowForwardIcon sx={{ ml: 1 }} />
                </LearnMoreButton>
              </OverlayContent>
            </Overlay>
          </ProgramCard>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: "600px" }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <ProgramCard>
            <CardImage
              component="img"
              image="/assets/Consolidation.webp"
              alt="Household Bills Consolidation Program"
            />
            <HeadingOnImage className="heading-on-image">
              <Typography variant="h4">
                Household Bills Consolidation
              </Typography>
            </HeadingOnImage>
            <Overlay className="overlay">
              <OverlayContent>
                <Typography variant="h4" gutterBottom>
                  More About This Program
                </Typography>
                <Typography variant="body1" paragraph>
                  Save up to 25% on your household bills with Vuior's
                  group-negotiated discounts through top-tier providers. Our
                  member-driven program continuously adapts to meet your needs,
                  delivering innovative and relevant services. Become a Vuior
                  member and experience our dedication to diversity, equity, and
                  inclusion, focusing on your needs and building a strong,
                  supportive community. Schedule a free consultation today!
                </Typography>
                <LearnMoreButton variant="contained" color="primary">
                  Learn More <ArrowForwardIcon sx={{ ml: 1 }} />
                </LearnMoreButton>
              </OverlayContent>
            </Overlay>
          </ProgramCard>
        </Grid>
      </Grid>
    </ProgramsContainer>
  );
};

export default ProgramsSection;
