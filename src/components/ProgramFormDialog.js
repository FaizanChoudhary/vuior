import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  IconButton,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FormDialog = ({ isHouseHoldProgramPage, handleClose }) => {
  const steps = isHouseHoldProgramPage
    ? ["YOUR INFO", "QUALIFYING QUESTIONS"]
    : ["YOUR INFO", "QUALIFYING QUESTIONS", "LOAN REGARDING"];
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    downPayment: "",
    proofOfIncome: "",
    proofOfResidence: "",
    monthlyPayment: "",
    jobDuration: "",
    creditScore: "",
    monthlyIncome: "",
    approval: "",
    vehicleModel: "",
    vehicleCost: "",
    tradeVehicle: "",
    tradeValue: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    // if (activeStep === 0) {
    //   if (formData.name && formData.email && formData.phone) {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   }
    // } else if (activeStep === 1) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {activeStep === 0 ? "Personal Info" : "Qualifying Questions"}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent
        sx={{
          position: "relative",
          display: "flex",
          height: { xs: "80vh", md: "90vh" },
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Left side - Steps */}
          <Grid
            item
            sm={4}
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundImage: `url('/assets/form.svg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              padding: 3,
              minHeight: "100%",
              overflow: "hidden", // Disable scrolling on the left side
            }}
          >
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{`Step ${index + 1}: ${label}`}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>

          {/* Right side - Form */}
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Ensure the footer sticks to the bottom
              padding: 3,
              overflowY: "auto", // Enable vertical scrolling for the form
              maxHeight: "80vh", // Set max height for scrolling
            }}
          >
            <Box flexGrow={1} mb={5}>
              {activeStep === 0 ? (
                <>
                  <Typography variant="h5" mb={2}>
                    Personal Info
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={3}>
                    Please provide your name, email address, and phone number.
                  </Typography>

                  <Typography variant="body1">Name</Typography>
                  <TextField
                    size="small"
                    fullWidth
                    name="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="body1">Email Address</Typography>
                  <TextField
                    size="small"
                    fullWidth
                    name="email"
                    placeholder="e.g. john@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="body1">Phone Number</Typography>
                  <TextField
                    size="small"
                    fullWidth
                    name="phone"
                    placeholder="e.g. +1 234 567 890"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />

                  {/* <Typography color="error" sx={{ mb: 2 }}>
                    All Fields are required
                  </Typography> */}
                </>
              ) : activeStep === 1 ? (
                <>
                  <Typography variant="h5" mb={2}>
                    Qualifying Questions
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={3}>
                    Qualifying Questions for Loan Program
                  </Typography>

                  <Typography variant="body1">
                    1. What type of loan are you interested in?
                  </Typography>
                  <Select
                    size="small"
                    fullWidth
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="home">Home Loan</MenuItem>
                    <MenuItem value="auto">Auto Loan</MenuItem>
                  </Select>

                  <Typography variant="body1">
                    2. How much down payment can you provide for the loan?
                  </Typography>
                  <Select
                    size="small"
                    fullWidth
                    name="downPayment"
                    value={formData.downPayment}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="5%">5%</MenuItem>
                    <MenuItem value="10%">10%</MenuItem>
                  </Select>

                  <Typography variant="body1">
                    3. Can you provide bank statements or proof of income for
                    verification purposes?
                  </Typography>
                  <RadioGroup
                    name="proofOfIncome"
                    value={formData.proofOfIncome}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>

                  <Typography variant="body1">
                    4. Can you provide proof of residence?
                  </Typography>
                  <RadioGroup
                    name="proofOfResidence"
                    value={formData.proofOfResidence}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>

                  <Typography variant="body1">
                    5. How much monthly payment can you afford for the loan?
                  </Typography>
                  <Select
                    size="small"
                    fullWidth
                    name="monthlyPayment"
                    value={formData.monthlyPayment}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="500">$500</MenuItem>
                    <MenuItem value="1000">$1000</MenuItem>
                  </Select>

                  <Typography variant="body1">
                    6. How long have you been at your current job?
                  </Typography>
                  <Select
                    size="small"
                    fullWidth
                    name="jobDuration"
                    value={formData.jobDuration}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="1year">1 year</MenuItem>
                    <MenuItem value="2years">2 years</MenuItem>
                  </Select>

                  <Typography variant="body1">
                    7. Rate your credit score:
                  </Typography>
                  <Select
                    size="small"
                    fullWidth
                    name="creditScore"
                    value={formData.creditScore}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="good">Good</MenuItem>
                    <MenuItem value="fair">Fair</MenuItem>
                    <MenuItem value="poor">Poor</MenuItem>
                  </Select>

                  <Typography variant="body1">
                    8. What is your estimated monthly income?
                  </Typography>
                  <Select
                    size="small"
                    fullWidth
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="1000">Less than $1000</MenuItem>
                    <MenuItem value="1000-2000">$1000-$2000</MenuItem>
                    <MenuItem value="2000-3000">$2000-$3000</MenuItem>
                  </Select>

                  <Typography variant="body1">
                    9. Why should we approve you for the loan program?
                    (Optional)
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    name="approval"
                    multiline
                    rows={2}
                    placeholder="Why should we approve you for the loan program?"
                    value={formData.approval}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </>
              ) : (
                <>
                  <Typography variant="h5" mb={2}>
                    Loan Releted Questions
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={3}>
                    Questions Related to Auto Loan
                  </Typography>

                  <Typography variant="body1">
                    9. Why should we approve you for the loan program?
                    (Optional)
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    name="vehicleModel"
                    placeholder="What is the make and model of the vehicle you wish to purchase"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />

                  <Typography variant="body1">
                    What is the total cost of the vehicle?
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    name="vehicleCost"
                    placeholder="What is the total cost of the vehicle?"
                    value={formData.vehicleCost}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />

                  <Typography variant="body1">
                    Are you trading in a vehicle?
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    name="tradeVehicle"
                    placeholder="Are you trading in a vehicle?"
                    value={formData.tradeVehicle}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />

                  <Typography variant="body1">
                    What is the estimated trade-in value?
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    name="tradeVehicle"
                    placeholder="What is the estimated trade-in value?"
                    value={formData.tradeVehicle}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />

                  {/* <Typography color="error" sx={{ mb: 2 }}>
                    All Fields are required
                  </Typography> */}
                </>
              )}
            </Box>

            {/* Footer with buttons */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #e0e0e0",
                width: "62%",
                backgroundColor: "white",
                height: 70,
              }}
            >
              <Button
                variant="text"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Go back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextStep}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next Step"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
