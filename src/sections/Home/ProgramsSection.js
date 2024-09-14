import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";

// Styling for the container
const ProgramsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

// Styling for individual program cards
const FlipCard = styled("div")({
  perspective: "1000px",
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: "20px",
});

const FlipCardInner = styled("div")({
  transition: "transform 0.6s ease-in-out",
  transformStyle: "preserve-3d",
  position: "relative",
  width: "100%",
  height: "100%",
  transformOrigin: "center",
  "&:hover": {
    transform: "rotateY(180deg)",
  },
  transform: "translateZ(0)", // Force hardware acceleration
});

const FlipCardSide = styled(Card)({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const FlipCardFront = styled(FlipCardSide)({
  zIndex: 2,
  transform: "rotateY(0deg)",
});

const FlipCardBack = styled(FlipCardSide)(({ image }) => ({
  transform: "rotateY(180deg)",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "30px",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Blackish overlay
    zIndex: 1,
  },
  "& > *": {
    zIndex: 2,
  },
}));

// Custom button with an arrow icon
const LearnMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ProgramsSection = () => {
  return (
    <ProgramsContainer>
      <Typography variant="h3" align="center" gutterBottom data-aos="fade-up">
        Our Programs
      </Typography>

      <Grid container spacing={2} mt={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: "600px" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <CardMedia
                  component="img"
                  image="/assets/loan_program.png"
                  alt="Loan Programs"
                  sx={{ height: "100%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Loan Programs
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    Unlock the financial support you need with Vuior's
                    member-focused loan programs.
                  </Typography>
                </CardContent>
              </FlipCardFront>
              <FlipCardBack image="/assets/loan_program.png">
                <Typography variant="h4" gutterBottom>
                  More About This Program
                </Typography>
                <Typography variant="h6" paragraph>
                  Unlock the financial support you need with Vuior's
                  member-focused loan programs. Designed to cater to all credit
                  profiles, our loan options provide flexible terms, competitive
                  rates, and quick approval. With in-house and special
                  financing, we ensure personalized solutions for every member.
                  Join vuior and take advantage of our commitment to diversity,
                  equity, and inclusion,fostering lifelong relationships and
                  building a supportive communityu
                </Typography>
                <LearnMoreButton variant="contained" color="primary">
                  Learn More <ArrowForwardIcon sx={{ ml: 1 }} />
                </LearnMoreButton>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: "600px" }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <CardMedia
                  component="img"
                  image="/assets/house_hold.png"
                  alt="Household Bills Consolidation Program"
                  sx={{ height: "100%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Household Bills Consolidation Program
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    Unlock the financial support you need with Vuior's
                    member-focused loan programs.
                  </Typography>
                </CardContent>
              </FlipCardFront>
              <FlipCardBack image="/assets/house_hold.png">
                <Typography variant="h4" gutterBottom>
                  More About This Program
                </Typography>
                <Typography variant="h6" paragraph>
                  Save up to 25% on your household bills with vuior's
                  group-negotiated discounts through top-tier providers. Our
                  member-driven program continuously adapts to meet your needs,
                  delivering innovative and relevant services. Become a vuior
                  member and experience our dedication to diversity, equity, and
                  inclusion, focusing on your needs and building a strong,
                  supportive community. Schedule a free consultation today!
                </Typography>
                <LearnMoreButton variant="contained" color="primary">
                  Learn More <ArrowForwardIcon sx={{ ml: 1 }} />
                </LearnMoreButton>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        </Grid>
      </Grid>
    </ProgramsContainer>
  );
};

export default ProgramsSection;
