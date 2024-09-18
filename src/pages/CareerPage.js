import React from "react";
import JoinOurTeam from "../sections/Careers/JoinOurTeam";
import WhyJoinVuoir from "../sections/Careers/WhyJoinVuoir";
import FinancialEmpowermentSection from "../sections/Careers/FinancialEmpowermentSection";
import SecurePositionSection from "../sections/Careers/SecurePositionSection";
import { Stack } from "@mui/material";

const CareerPage = () => {
  return (
    <Stack spacing={1}>
      <JoinOurTeam />
      <WhyJoinVuoir />
      <FinancialEmpowermentSection />
      <SecurePositionSection />
    </Stack>
  );
};

export default CareerPage;
