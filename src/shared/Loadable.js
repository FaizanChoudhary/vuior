import { CircularProgress, Box } from "@mui/material";
import { Suspense } from "react";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
