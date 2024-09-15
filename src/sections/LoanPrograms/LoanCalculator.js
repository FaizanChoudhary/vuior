import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(60);
  const [startDate, setStartDate] = useState("09 / 14 / 2024");
  const [showSchedule, setShowSchedule] = useState(false);

  const monthlyPayment = 212.47; // Placeholder for calculation logic
  const totalInterest = 2748.2;
  const totalLoanPayments = loanAmount + totalInterest;
  const payoffDate = "09 / 14 / 2029";

  const handleScheduleToggle = () => setShowSchedule(!showSchedule);

  // Placeholder amortization data
  const amortizationData = [
    {
      date: "Sept 24",
      principal: 129.14,
      interest: 83.33,
      payment: 212.47,
      balance: 9870.86,
    },
    {
      date: "Oct 24",
      principal: 130.21,
      interest: 82.26,
      payment: 212.47,
      balance: 9740.65,
    },
    // Add more rows here...
  ];

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        backgroundColor: "#F9F9F9",
        borderRadius: "16px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header Section */}
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 4 }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Estimation Tool
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Personal Loan Calculator
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575", marginTop: 1 }}>
            Use this personal loan calculator to see the monthly payments and
            total cost of a personal loan.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Loan Details Card */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              padding: 3,
              borderRadius: "16px",
              backgroundColor: "#EEF9F6",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 3 }}
              >
                Loan Details
              </Typography>
              <Box sx={{ marginBottom: 3 }}>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Loan Amount
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </Box>
              <Box sx={{ marginBottom: 3 }}>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Interest Rate (%)
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </Box>
              <Box sx={{ marginBottom: 3 }}>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Loan Term (months)
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />
              </Box>
              <Box sx={{ marginBottom: 3 }}>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Start Date
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <CalendarTodayIcon />
                      </IconButton>
                    ),
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Loan Estimate Card */}
        <Grid item xs={12} md={7}>
          <Card
            sx={{
              padding: 3,
              borderRadius: "16px",
              backgroundColor: "#F9F9F9",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 3 }}
              >
                Your Loan Estimate
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#064E3B" }}
              >
                ${monthlyPayment}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 3 }}>
                Monthly Payment
              </Typography>

              <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell>Total Principal</TableCell>
                      <TableCell align="right">${loanAmount}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Interest Payments</TableCell>
                      <TableCell align="right">${totalInterest}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Loan Payments</TableCell>
                      <TableCell align="right">${totalLoanPayments}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Payoff Date</TableCell>
                      <TableCell align="right">{payoffDate}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Toggle Amortization Schedule */}
              <Button variant="text" onClick={handleScheduleToggle}>
                {showSchedule
                  ? "Hide Amortization Schedule"
                  : "Show Amortization Schedule"}
              </Button>

              {/* Amortization Table */}
              {showSchedule && (
                <TableContainer component={Paper} sx={{ marginTop: 3 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Payment Date</TableCell>
                        <TableCell align="right">Principal</TableCell>
                        <TableCell align="right">Interest</TableCell>
                        <TableCell align="right">Monthly Payment</TableCell>
                        <TableCell align="right">Principal Balance</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {amortizationData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.date}</TableCell>
                          <TableCell align="right">${row.principal}</TableCell>
                          <TableCell align="right">${row.interest}</TableCell>
                          <TableCell align="right">${row.payment}</TableCell>
                          <TableCell align="right">${row.balance}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanCalculator;
