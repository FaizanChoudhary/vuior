// LoanProgramDetails.js
import React from "react";
import HeroLoanDetailSection from "../sections/LoanPrograms/DetailPages/HeroLoanDetailSection";
import EligibilityCommitmentSection from "../sections/LoanPrograms/DetailPages/EligibilityCommitmentSection";
import CommunityMembershipSection from "../sections/LoanPrograms/DetailPages/CommunityMembershipSection";
import LoanDetailsJoinSection from "../sections/LoanPrograms/DetailPages/LoanDetailsJoinSection";
import { Stack } from "@mui/material";

const LoanProgramDetails = () => {
  return (
    <Stack spacing={1} mt={10}>
      <HeroLoanDetailSection />
      <EligibilityCommitmentSection />
      <CommunityMembershipSection />
      <LoanDetailsJoinSection />
    </Stack>
  );
};

export default LoanProgramDetails;
