// LoanProgramDetails.js
import React from "react";
import HeroLoanDetailSection from "../sections/LoanPrograms/DetailPages/HeroLoanDetailSection";
import EligibilityCommitmentSection from "../sections/LoanPrograms/DetailPages/EligibilityCommitmentSection";
import CommunityMembershipSection from "../sections/LoanPrograms/DetailPages/CommunityMembershipSection";
import LoanDetailsJoinSection from "../sections/LoanPrograms/DetailPages/LoanDetailsJoinSection";
import { Stack } from "@mui/material";
import { loanPrograms } from "../shared/constants";
import { useParams } from "react-router-dom";

const LoanProgramDetails = () => {
  const { loanType } = useParams();
  const programData = loanPrograms[loanType];
  return (
    <Stack>
      <HeroLoanDetailSection data={programData} />
      <EligibilityCommitmentSection data={programData} />
      <CommunityMembershipSection data={programData} />
      <LoanDetailsJoinSection data={programData} />
    </Stack>
  );
};

export default LoanProgramDetails;
