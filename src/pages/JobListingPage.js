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
  flexWrap: "wrap",
  gap: 10,
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: theme.spacing(1),
  },
}));

const ClearButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#064E3B",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0B634D",
  },
  borderRadius: "12px",
  padding: theme.spacing(1.5, 3),
}));

const sortOptions = [
  { value: "sort", label: "Sort by" },
  { value: "By Date", label: "By Date" },
  { value: "By Salary Limit", label: "By Salary Limit" },
];

const salaryRanges = [
  { label: "Salary Range", value: "" },
  { label: "0 - 50,000", value: [0, 50000] },
  { label: "50,000 - 100,000", value: [50000, 100000] },
  { label: "100,000 - 150,000", value: [100000, 150000] },
  { label: "150,000 or greater", value: [150000, Infinity] },
];

const JobListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("sort");
  const [page, setPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [salaryRange, setSalaryRange] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [location, setLocation] = useState("");
  const jobsPerPage = 5;

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalaryRange(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateRange(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSortOption("sort");
    setSalaryRange("");
    setDateRange("");
    setLocation("");
    setPage(1);
  };

  const filteredJobs = jobs
    .filter((job) => {
      const titleMatch = job.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const descriptionMatch = job.summary
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const salaryMatch = salaryRange
        ? job.salary_min >= salaryRange[0] && job.salary_max <= salaryRange[1]
        : job;
      const dateMatch = dateRange
        ? new Date(job.created_at) >= new Date(dateRange)
        : true;
      const locationMatch = location
        ? job.location?.toLowerCase().includes(location.toLowerCase())
        : true;

      return (
        (titleMatch || descriptionMatch) &&
        salaryMatch &&
        dateMatch &&
        locationMatch
      );
    })
    .sort((a, b) => {
      if (sortOption === "By Date") {
        return new Date(b.created_at) - new Date(a.created_at);
      } else if (sortOption === "By Salary Limit") {
        return b.salary_max - a.salary_max;
      }
      return 0;
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
          sx={{ fontWeight: "bold", zIndex: 2, textAlign: "center" }}
        >
          Secure Your Position Today!
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
            value={sortOption}
            onChange={handleSortChange}
            sx={{ minWidth: 200, width: { xs: "100%", md: "auto" } }}
            displayEmpty
          >
            {sortOptions.map((sortOption, index) => (
              <MenuItem key={index} value={sortOption.value}>
                {sortOption.label}
              </MenuItem>
            ))}
          </Select>

          <Select
            value={salaryRange}
            onChange={handleSalaryChange}
            displayEmpty
            sx={{ minWidth: 200, width: { xs: "100%", md: "auto" } }}
          >
            {salaryRanges.map((range, index) => (
              <MenuItem key={index} value={range.value}>
                {range.label}
              </MenuItem>
            ))}
          </Select>

          <TextField
            label="Posted After"
            type="date"
            value={dateRange}
            onChange={handleDateChange}
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: 200, width: { xs: "100%", md: "auto" } }}
          />

          <TextField
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
            sx={{ minWidth: 200, width: { xs: "100%", md: "auto" } }}
          />

          <ClearButton
            onClick={handleClearFilters}
            sx={{ width: { xs: "100%", md: "auto" } }}
          >
            Clear
          </ClearButton>
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
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                        mr={{ xs: 0, md: 1 }}
                      >
                        <Typography variant="caption">
                          {job.created_at}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ${job.salary_min.toLocaleString()} - $
                          {job.salary_max.toLocaleString()}
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
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 1 }}
                      >
                        Location:
                      </Typography>
                      <Typography variant="body2" color="black">
                        {job.location}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          backgroundColor: "#064E3B",
                          mt: 1,
                          paddingX: 4,
                          paddingY: 1,
                          borderRadius: "20px",
                          fontWeight: "bold",
                          "&:hover": {
                            transform: "scale(1.02)",
                            transition: "transform 0.4s ease",
                          },
                        }}
                        onClick={handleOpenDialog}
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

      {openDialog && <SecurePositionFormDialog onClose={handleCloseDialog} />}
    </>
  );
};

export default JobListingPage;
