import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import WorkIcon from "@mui/icons-material/Work";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Styling for the container
const WhoWeAreContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

// Styling for the informational boxes with icons and vertical line
const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  position: "relative",
  paddingLeft: theme.spacing(2),
  "&:not(:last-child)": {
    marginBottom: theme.spacing(4),
  },
  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    top: "50px", // Adjust based on icon size
    left: "32px", // Adjust based on icon position
    width: "2px",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    zIndex: -1, // Behind the icon
  },
}));

// Styling for the icon box with vertical line
const IconBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: theme.spacing(2),
  borderRadius: "50%",
  marginRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  position: "relative",
}));

const WhoWeAreSection = () => {
  return (
    <WhoWeAreContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Who We Are
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left Column - Image */}
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="/assets/family_image.png" // Path to your image
              alt="Family"
              style={{ width: "100%", height: "auto", borderRadius: "15px" }}
            />
          </Box>
        </Grid>

        {/* Right Column - Text Content */}
        <Grid item xs={12} md={6}>
          {/* Our Work */}
          <InfoBox>
            <IconBox>
              <WorkIcon fontSize="large" />
            </IconBox>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Our Work
              </Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                At Vuior, we work to empower people and families to attain
                financial independence by offering all-inclusive debt relief
                options. With years of experience in the field, we are aware of
                the difficulties associated with debt management and the
                negative effects it may have on one's quality of life. Each
                client receives individualized attention from our team of
                knowledgeable counselors as they evaluate their particular
                financial circumstances and create a personalized debt
                management plan.
              </Typography>
            </Box>
          </InfoBox>

          {/* Our Mission */}
          <InfoBox>
            <IconBox>
              <LightbulbIcon fontSize="large" />
            </IconBox>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                Empower individuals and families to achieve financial stability
                by consolidating household bills and providing access to credit.
              </Typography>
            </Box>
          </InfoBox>

          {/* Our Vision */}
          <InfoBox>
            <IconBox>
              <VisibilityIcon fontSize="large" />
            </IconBox>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                To become a trusted partner in your financial journey, fostering
                a community where financial well-being is accessible to all.
              </Typography>
            </Box>
          </InfoBox>
        </Grid>
      </Grid>
    </WhoWeAreContainer>
  );
};

export default WhoWeAreSection;
