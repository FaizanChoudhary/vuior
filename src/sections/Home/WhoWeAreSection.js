import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import BGTopRight from "../../components/BGTopRight";
import BGBottomLeft from "../../components/BGBottomLeft";

// Styling for the container
const WhoWeAreContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  padding: `${theme.spacing(8)} ${theme.spacing(20)}`, // paddingY, paddingX
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3), // smaller paddingY, paddingX for small screens
  },
}));

// Styling for the informational boxes with icons and vertical line
const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  position: "relative",
  paddingLeft: theme.spacing(2),
  // "&:not(:last-child)": {
  //   marginBottom: theme.spacing(4),
  // },
  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    top: "50px", // Adjust based on icon size
    left: "44px", // Adjust based on icon position
    width: "4px",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    zIndex: -1, // Behind the icon
  },
}));

const WhoWeAreSection = () => {
  return (
    <WhoWeAreContainer>
      <BGTopRight src="/assets/backgrounds/bg2-top-right.png" />
      <BGBottomLeft src="/assets/backgrounds/bg2-bottom-left.png" />
      <Box data-aos="fade-up">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={30}
        >
          Who We Are
        </Typography>
        <Box
          sx={{
            mt: "5px",
            width: "90%",
            margin: "0",
            borderBottom: "3px solid #23AB84",
          }}
        />
      </Box>

      <Grid container spacing={4} mt={2}>
        {/* Left Column - Image */}
        <Grid item xs={12} lg={5}>
          <Box data-aos="fade-up">
            <img
              src="/assets/new/new1.jpeg" // Path to your image
              alt="Family"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 500,
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </Box>
        </Grid>

        {/* Right Column - Text Content */}
        <Grid item xs={12} lg={7} data-aos="fade-up">
          {/* Our Work */}
          <InfoBox sx={{ minHeight: 200 }}>
            <img src="/assets/icons/ourwork.svg" alt="work" />
            <Box ml={3}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: 16 }}
              >
                Our Work
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", fontSize: 14 }}>
                At Vuior, we provide solutions for managing household bills and
                accessing flexible loan options. Our programs are designed to
                help members simplify their finances and access the best rates
                available.
              </Typography>
            </Box>
          </InfoBox>

          {/* Our Mission */}
          <InfoBox sx={{ minHeight: 120 }}>
            <img src="/assets/icons/mission.svg" alt="mission" />

            <Box ml={3}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: 16 }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", fontSize: 14 }}>
                To empower our members by offering accessible financial
                solutions that promote stability and growth.
              </Typography>
            </Box>
          </InfoBox>

          {/* Our Vision */}
          <InfoBox>
            <img src="/assets/icons/vision.svg" alt="vision" />

            <Box ml={3}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: 16 }}
              >
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", fontSize: 14 }}>
                To build a community-driven platform where financial management
                is straightforward, inclusive, and supportive for everyone.
              </Typography>
            </Box>
          </InfoBox>
        </Grid>
      </Grid>
    </WhoWeAreContainer>
  );
};

export default WhoWeAreSection;
