import React from "react";
import FinancialFreedomSection from "../sections/Programs/FinancialFreedomSection";
import OurProgramsSection from "../sections/Programs/OurProgramsSection";
import HowToBecomeMember from "../sections/Programs/HowToBecomeMember";
import ConsultationForm from "../sections/Home/ConsultationForm";
import FAQSection from "../sections/Programs/FAQSection";
import EnsureQualitySection from "../sections/Membership/EnsureQualitySection";
import { Stack } from "@mui/material";

const ProgramPage = () => {
  return (
    <Stack spacing={10}>
      <FinancialFreedomSection />
      <OurProgramsSection />
      <HowToBecomeMember />
      <EnsureQualitySection />
      <ConsultationForm />
      <FAQSection />
    </Stack>
  );
};

export default ProgramPage;
