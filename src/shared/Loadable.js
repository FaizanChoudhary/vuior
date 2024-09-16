import { Box } from "@mui/material";
import { Suspense } from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/Animation - 1726493504745.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

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
          <Lottie options={defaultOptions} height={150} width={150} />
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
