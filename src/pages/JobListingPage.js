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
      <Paper elevation={3} sx={{ p: 3, mt: 4, backgroundColor: "white" }}>
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <img
            src="/assets/black-logo.png" // Make sure this path points to your logo
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Image Section */}
      <Box
        sx={{
          width: "100%",
          height: "400px",
          backgroundImage: `url(/assets/jobListing.webp)`, // Your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Optionally add overlay text or elements */}
      </Box>

      {/* Search Bar */}
      <Paper elevation={3} sx={{ p: 2, mt: -4, maxWidth: "90%", mx: "auto" }}>
        <Box display="flex" justifyContent="center">
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
            sx={{ flexGrow: 1, mr: 2 }}
          />
          <Button variant="contained" color="success">
            Search
          </Button>
        </Box>
      </Paper>

      {/* Job Listings Section */}
      <Grid container spacing={3} mt={3}>
        <Grid container item xs={12} md={6} spacing={1}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {job.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ width: "100%" }}>
              No jobs found
            </Typography>
          )}
          <Grid item xs={12}>
            {/* Pagination */}
            <Box mt={3} display="flex" justifyContent="center">
              <Pagination count={5} color="primary" />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* About Us Section */}
          <AboutUs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobListingPage;
