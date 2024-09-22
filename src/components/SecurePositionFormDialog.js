import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { AttachFile, Close } from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogTitle-root": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    textAlign: "center",
    position: "relative",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
    backgroundColor: "#f9f9f9",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
    justifyContent: "center",
  },
}));

const SecurePositionFormDialog = ({ onClose }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
  };

  return (
    <StyledDialog open={true} onClose={onClose}>
      <DialogTitle>
        Application Form
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: "absolute", right: 8, top: 8, color: "white" }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
              InputProps={{
                style: { borderRadius: 8 },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
              InputProps={{
                style: { borderRadius: 8 },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              required
              type="email"
              InputProps={{
                style: { borderRadius: 8 },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              required
              type="tel"
              InputProps={{
                style: { borderRadius: 8 },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<AttachFile />}
              fullWidth
              style={{
                borderRadius: 8,
                "&:hover": {
                  backgroundColor: "#b2ebf2",
                },
              }}
            >
              Upload File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {fileName && (
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginTop: 8 }}
              >
                {`Uploaded File: ${fileName}`}
              </Typography>
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default SecurePositionFormDialog;
