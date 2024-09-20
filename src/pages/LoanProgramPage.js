import React from "react";
import LoanProgramsSection from "../sections/LoanPrograms/LoanProgramsSection";
import LoanProgramOffers from "../sections/LoanPrograms/LoanProgramOffers";
import HowItWorks from "../sections/LoanPrograms/HowItWorksCard";
import MemberBenefits from "../sections/LoanPrograms/MemberBenefits";
import HowToJoin from "../sections/LoanPrograms/HowToJoin";
// import LoanCalculator from "../sections/LoanPrograms/LoanCalculator";
import ConsultationForm from "../sections/Home/ConsultationForm";
import EnsureQualitySection from "../sections/Membership/EnsureQualitySection";
import FAQSection from "../sections/LoanPrograms/FAQSection";
import { Stack } from "@mui/material";

const LoanProgramPage = () => {
  return (
    <Stack spacing={1}>
      <LoanProgramsSection />
      <LoanProgramOffers />
      <HowItWorks />
      <MemberBenefits />
      <HowToJoin />
      {/* <LoanCalculator /> */}
      <FAQSection />
      <ConsultationForm />
      <EnsureQualitySection />
    </Stack>
  );
};

export default LoanProgramPage;
