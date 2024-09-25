import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Pagination,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import SecurePositionFormDialog from "../components/SecurePositionFormDialog";
import { jobs } from "../shared/constants"; // Assuming jobs is your array of job listings

const SearchBarContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: "-50px",
  borderRadius: "20px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  width: "90%",
  margin: "auto",
  display: "flex",
  gap: 10,
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#064E3B",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0B634D",
  },
  borderRadius: "12px",
  padding: theme.spacing(1.5, 3),
}));

const categories = ["All", "Sales", "Engineering", "Marketing"];

const JobListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All"); // State for category
  const [page, setPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const jobsPerPage = 5;

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setPage(1); // Reset to the first page on category change
  };

  const filteredJobs = jobs.filter((job) => {
    const titleMatch =
      job.title && job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const descriptionMatch =
      job.description &&
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = category === "All" || job.category === category; // Check if job matches selected category

    return (titleMatch || descriptionMatch) && categoryMatch;
  });

  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const AboutUs = () => {
    return (
      <Paper elevation={3} sx={{ p: 3, mt: 4, backgroundColor: "#F7FAFC" }}>
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <img
            src="/assets/black-logo.png"
            alt="VUIOR Logo"
            style={{ width: "150px", marginRight: "10px" }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          VUIOR is a community-driven company focused on financial empowerment.
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
          <Select
            value={category}
            onChange={handleCategoryChange}
            sx={{
              width: {
                xs: "100%", // Full width on extra small screens
                md: "auto", // Auto width on medium and larger screens
              },
              minWidth: 200, // Ensure a minimum width on larger screens
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
          <SearchButton variant="contained" sx={{ ml: 2 }}>
            Search
          </SearchButton>
        </SearchBarContainer>

        <Grid container spacing={3} mt={3}>
          <Grid container item xs={12} spacing={3}>
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job, index) => (
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
                      {/* Job details */}
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
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          backgroundColor: "#064E3B",
                          paddingX: 4,
                          paddingY: 1,
                          borderRadius: "20px",
                          fontWeight: "bold",
                          "&:hover": {
                            transform: "scale(1.02)",
                            transition: "transform 0.4s ease",
                          },
                        }}
                        onClick={handleOpenDialog} // Open dialog on button click
                      >
                        Apply Now
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" align="center" sx={{ width: "100%" }}>
                No jobs found
              </Typography>
            )}
            <Grid item xs={12}>
              <Box mt={3} display="flex" justifyContent="center">
                <Pagination
                  count={Math.ceil(filteredJobs.length / jobsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <AboutUs />
          </Grid>
        </Grid>
      </Container>

      {/* Dialog for Job Application */}
      {openDialog && <SecurePositionFormDialog onClose={handleCloseDialog} />}
    </>
  );
};

export default JobListingPage;
