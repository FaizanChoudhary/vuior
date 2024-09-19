import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import BGTopRight from "../../components/BGTopRight";
import BGBottomLeft from "../../components/BGBottomLeft";

// Section container for the whole section background
const SectionContainer = styled(Box)(({ theme }) => ({
  // background: "linear-gradient(135deg, #f8f8f8 0%, #e8f7f0 100%)",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  padding: `${theme.spacing(8)} ${theme.spacing(20)}`, // paddingY, paddingX
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(3)} ${theme.spacing(2)}`, // smaller paddingY, paddingX for small screens
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

const OurProgramsSection = () => {
  return (
    <SectionContainer>
      <BGTopRight src="/assets/backgrounds/bg1-top-right.png" />
      <BGBottomLeft src="/assets/backgrounds/bg1-bottom-left.png" />
      <Box data-aos="fade-up">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={30}
        >
          Our Programs
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
          }}
        />
      </Box>

      {/* First Program - Household Bills Consolidation */}
      <Box sx={{ position: "relative" }}>
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
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, fontSize: 24 }}
            >
              Household Bills Consolidation Program
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ lineHeight: 1.8, fontSize: 14 }}
            >
              Simplify your financial life by consolidating your household bills
              into a single, manageable monthly payment. Through partnerships
              with highly-rated, best-in-class carriers and providers, we offer
              group-negotiated discounts to help you save money and reduce
              financial stress. Our program is designed to provide innovative,
              relevant coverage and service that exceeds your expectations.
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
        <CardContainer data-aos="fade-up">
          {/* Image on the right */}
          <ImageContainer>
            <img src="/assets/loan_prg.jpg" alt="Loan Programs" />
          </ImageContainer>

          {/* Text on the left */}
          <TextContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, fontSize: 24 }}
            >
              Loan Programs
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ lineHeight: 1.8, fontSize: 14 }}
            >
              Access a variety of loan options tailored to meet your specific
              needs. Our loan program includes auto loans, mortgage loans,
              personal loans, student loans, travel loans, wedding loans, home
              improvement loans, health care loans, emergency loans, and more.
              We offer in-house financing and special financing options,
              welcoming applicants from all credit backgrounds. Our loans are
              available to both members and non-members, although non-members
              must become members to take full advantage of our benefits.
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
