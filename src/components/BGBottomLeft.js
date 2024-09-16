import React from "react";
import { Box } from "@mui/material";

const BGBottomLeft = ({ src }) => {
  return (
    <Box
      component="img"
      src={src}
      alt="Background Bottom Left"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        objectFit: "cover",
        maxWidth: 200,
      }}
    />
  );
};

export default BGBottomLeft;
