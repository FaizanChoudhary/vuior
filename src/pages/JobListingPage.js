import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Container,
  InputAdornment,
  Pagination,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";

// Styled search bar container
const SearchBarContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: "-50px",
  borderRadius: "20px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  width: "90%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
}));

// Styled job card
const JobCard = styled(Card)(({ theme }) => ({
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  borderRadius: "16px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
}));

// Search Button
const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#064E3B",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0B634D",
  },
  borderRadius: "12px",
  padding: theme.spacing(1.5, 3),
}));

const JobListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy job data
  const dummyJobs = [
    { title: "Software Engineer", location: "Remote" },
    { title: "Product Manager", location: "New York" },
    { title: "Data Analyst", location: "San Francisco" },
    { title: "UX Designer", location: "Austin" },
  ];

  // Filter jobs based on search term
  const filteredJobs = dummyJobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const AboutUs = () => {
    return (
      <Paper elevation={3} sx={{ p: 3, mt: 4, backgroundColor: "#F7FAFC" }}>
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <img
            src="/assets/black-logo.png"
            alt="Vuior Logo"
            style={{ width: "150px", marginRight: "10px" }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          Vuior is a member-owned organization committed to diversity, equity,
          and inclusion. They offer various financial programs and services,
          including loans, insurance, and bill consolidation, tailored to meet
          their members' needs.
        </Typography>
      </Paper>
    );
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          backgroundImage: `url(/assets/jobListing.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{ fontWeight: "bold", zIndex: 2 }}
        >
          Find Your Dream Job
        </Typography>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Search Bar */}
        <SearchBarContainer elevation={3}>
          <TextField
            fullWidth
            placeholder="Search for jobs or keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <SearchButton
            variant="contained"
            sx={{ ml: 2 }}
            endIcon={<ArrowForwardIcon />}
          >
            Search
          </SearchButton>
        </SearchBarContainer>

        {/* Job Listings Section */}
        <Grid container spacing={3} mt={3}>
          <Grid container item xs={12} md={7} spacing={3}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <Grid item xs={12} key={index}>
                  <JobCard>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {job.title}
                      </Typography>
                      <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                        <LocationOnIcon color="action" sx={{ mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {job.location}
                        </Typography>
                      </Box>
                    </CardContent>
                  </JobCard>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" align="center" sx={{ width: "100%" }}>
                No jobs found
              </Typography>
            )}
            <Grid item xs={12}>
              <Box mt={3} display="flex" justifyContent="center">
                <Pagination count={5} color="primary" />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            {/* About Us Section */}
            <AboutUs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default JobListingPage;
