import React from "react";
import ConsultationForm from "../sections/Home/ConsultationForm";
import OurBasicPrinciplesSection from "../sections/Home/OurBasicPrinciplesSection";
import ProgramsSection from "../sections/Home/ProgramsSection";
import WelcomeSection from "../sections/Home/WelcomeSection";
import WhoWeAreSection from "../sections/Home/WhoWeAreSection";
import { Stack } from "@mui/material";

const HomePage = () => (
  <Stack spacing={1}>
    <ConsultationForm />
    <WelcomeSection />
    <ProgramsSection />
    <WhoWeAreSection />
    <OurBasicPrinciplesSection />
  </Stack>
);

export default HomePage;
