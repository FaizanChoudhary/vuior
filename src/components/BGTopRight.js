import React from "react";
import { Box } from "@mui/material";

const BGTopRight = ({ src }) => {
  return (
    <Box
      component="img"
      src={src}
      alt="Background Top Right"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "auto",
        objectFit: "cover",
      }}
    />
  );
};

export default BGTopRight;
