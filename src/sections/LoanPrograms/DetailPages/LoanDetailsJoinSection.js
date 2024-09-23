import { Box, Button, Typography } from "@mui/material";
import React from "react";

const LoanDetailsJoinSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 4, md: 6 },
        backgroundColor: "#EEF9F6", // Light green background
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Box data-aos="fade-up" sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={{ xs: 16, md: 24 }}
        >
          Take control of your financial future with Vuior’s Personal Loan
          Program. Apply now to get started!
        </Typography>
      </Box>

      {/* Call-to-Action Button */}
      <Button
        data-aos="fade-up"
        variant="contained"
        color="primary"
        sx={{
          paddingX: 4,
          paddingY: 1,
          backgroundColor: "#064E3B",
          borderRadius: "20px",
          fontWeight: "bold",
        }}
        // onClick={() => navigate("/")}
      >
        Apply now
      </Button>
    </Box>
  );
};

export default LoanDetailsJoinSection;
