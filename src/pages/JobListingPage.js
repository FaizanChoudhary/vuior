import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  InputAdornment,
  // Pagination,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { jobs } from "../shared/constants"; // Assuming jobs is your array of job listings

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

  // Filter jobs based on search term in title and description
  const filteredJobs = jobs.filter((job) => {
    const titleMatch =
      job.title && job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const descriptionMatch =
      job.description &&
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    return titleMatch || descriptionMatch;
  });

  const AboutUs = () => {
    return (
      <Paper elevation={3} sx={{ p: 3, mt: 4, backgroundColor: "#F7FAFC" }}>
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <img
            src="/assets/black-logo.png"
            alt="Vuio Logo"
            style={{ width: "150px", marginRight: "10px" }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          Vuio is a community-driven company focused on financial empowerment.
          We offer innovative solutions and support individuals in achieving
          their financial goals.
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
          <SearchButton variant="contained" sx={{ ml: 2 }}>
            Search
          </SearchButton>
        </SearchBarContainer>

        {/* Job Listings Section */}
        <Grid container spacing={3} mt={3}>
          <Grid container item xs={12} spacing={3}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <Grid item xs={12} key={index}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {job.title}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          {job.salary}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 1 }}
                      >
                        About Us:
                      </Typography>
                      <Typography variant="body2" color="black" sx={{ mt: 1 }}>
                        {job.about}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 1 }}
                      >
                        Job Summary:
                      </Typography>
                      <Typography variant="body2" color="black" sx={{ mt: 1 }}>
                        {job.summary}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 1 }}
                      >
                        Objectives of the Role:
                      </Typography>
                      <ul>
                        {job.objectives.map((benefit, idx) => (
                          <li key={idx}>
                            <Typography variant="body2" color="black">
                              {benefit}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 1 }}
                      >
                        Role Responsibilities:
                      </Typography>
                      <ul>
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>
                            <Typography variant="body2" color="black">
                              {resp}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 1 }}
                      >
                        Daily & Weekly Tasks:
                      </Typography>
                      <ul>
                        {job.tasks.map((resp, idx) => (
                          <li key={idx}>
                            <Typography variant="body2" color="black">
                              {resp}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 1 }}
                      >
                        Benefits:
                      </Typography>
                      <ul>
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx}>
                            <Typography variant="body2" color="black">
                              {benefit}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" align="center" sx={{ width: "100%" }}>
                No jobs found
              </Typography>
            )}
            {/* <Grid item xs={12}>
              <Box mt={3} display="flex" justifyContent="center">
                <Pagination count={5} color="primary" />
              </Box>
            </Grid> */}
          </Grid>
          <Grid item xs={12}>
            {/* About Us Section */}
            <AboutUs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default JobListingPage;
