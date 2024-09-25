import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecurePositionFormDialog from "../../components/SecurePositionFormDialog";

const SecurePositionSection = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        backgroundColor: "#EEF9F6",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 2 }}
      >
        Secure Your Position
      </Typography>

      {/* Description */}
      {/* <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Register For The Vuior Mega Nationwide Hiring Event Now And Set The Time
        On Your Calendar. This Is How Your Success Journey Starts!
      </Typography> */}

      {/* Apply Now Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#064E3B",
          borderRadius: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // onClick={() => setOpen(true)}
        onClick={() => navigate("/careers/jobs")}
      >
        Apply Now <ArrowForwardIcon fontSize="small" sx={{ ml: 1 }} />
      </Button>
      {open ? (
        <SecurePositionFormDialog onClose={() => setOpen(false)} />
      ) : null}
    </Box>
  );
};

export default SecurePositionSection;
