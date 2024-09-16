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
        top: 100,
        right: 0,
        objectFit: "cover",
        maxWidth: 200,
      }}
    />
  );
};

export default BGTopRight;
