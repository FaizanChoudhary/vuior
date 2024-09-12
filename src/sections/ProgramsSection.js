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
const ProgramCard = styled(Card)(({ theme }) => ({
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: "15px",
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
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
      <Typography variant="h4" align="center" gutterBottom>
        Our Programs
      </Typography>

      <Grid container spacing={4}>
        {/* Program 1 - Loan Programs */}
        <Grid item xs={12} md={6}>
          <ProgramCard>
            {/* Program Image */}
            <CardMedia
              component="img"
              image="/assets/loan_program.png" // Path to your image
              alt="Loan Programs"
              sx={{ height: "200px", objectFit: "cover" }}
            />
            <CardContent>
              {/* Program Title */}
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Loan Programs
              </Typography>
              {/* Program Description */}
              <Typography variant="body1" color="textSecondary" paragraph>
                Unlock the financial support you need with Vuior's
                member-focused loan programs. Designed to cater to all credit
                profiles, our loan options provide flexible terms, competitive
                rates, and quick approval. With in-house and special financing,
                we ensure personalized solutions for every member. Join Vuior
                and take advantage of our commitment to diversity, equity, and
                inclusion, fostering lifelong relationships and building a
                supportive community.
              </Typography>
              {/* Learn More Button */}
              <LearnMoreButton variant="contained" color="primary">
                Learn More <ArrowForwardIcon sx={{ ml: 1 }} />
              </LearnMoreButton>
            </CardContent>
          </ProgramCard>
        </Grid>

        {/* Program 2 - Household Bills Consolidation */}
        <Grid item xs={12} md={6}>
          <ProgramCard>
            {/* Program Image */}
            <CardMedia
              component="img"
              image="/assets/house_hold.png" // Path to your image
              alt="Household Bills Consolidation Program"
              sx={{ height: "200px", objectFit: "cover" }}
            />
            <CardContent>
              {/* Program Title */}
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Household Bills Consolidation Program
              </Typography>
              {/* Program Description */}
              <Typography variant="body1" color="textSecondary" paragraph>
                Save up to 25% on your household bills with Vuior's
                group-negotiated discounts through top-tier providers. Our
                member-driven program continuously adapts to meet your needs,
                delivering innovative and relevant services. Become a Vuior
                member and experience our dedication to diversity, equity, and
                inclusion, focusing on your needs and building a strong,
                supportive community. Schedule a free consultation today!
              </Typography>
              {/* Learn More Button */}
              <LearnMoreButton variant="contained" color="primary">
                Learn More <ArrowForwardIcon sx={{ ml: 1 }} />
              </LearnMoreButton>
            </CardContent>
          </ProgramCard>
        </Grid>
      </Grid>
    </ProgramsContainer>
  );
};

export default ProgramsSection;
