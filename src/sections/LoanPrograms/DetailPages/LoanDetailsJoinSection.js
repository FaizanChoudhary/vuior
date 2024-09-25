import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProgramFormDialog from "../../../components/ProgramFormDialog";
// import ProgramFormDialog from "../../components/ProgramFormDialog";

const LoanDetailsJoinSection = () => {
  const [open, setOpen] = useState(false);

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
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#064E3B",
          paddingX: 4,
          paddingY: 1,
          borderRadius: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "transform 0.2s ease",
          },
        }}
        // onClick={() => setOpen(true)}
        onClick={() =>
          window.open("https://add.vuior.com/user/login", "_blank")
        }
      >
        Apply Now <ArrowForwardIcon fontSize="small" sx={{ ml: 1 }} />
      </Button>
      {open ? <ProgramFormDialog handleClose={() => setOpen(false)} /> : null}
    </Box>
  );
};

export default LoanDetailsJoinSection;
