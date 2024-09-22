import React from "react";
import HouseholdBillConsolidation from "../sections/HouseholdBillConsolidation/HouseholdBillConsolidation";
import WhyChoose from "../sections/HouseholdBillConsolidation/WhyChooseCard";
import HowToJoin from "../sections/LoanPrograms/HowToJoin";
import EnsureQualitySection from "../sections/Membership/EnsureQualitySection";
import { Stack } from "@mui/material";
import MemberBenefits from "../sections/LoanPrograms/MemberBenefits";
import HowItWorks from "../sections/HouseholdBillConsolidation/HowItWorks";
import FAQSection from "../sections/HouseholdBillConsolidation/FAQSection";

const HouseHoldPage = () => {
  return (
    <Stack spacing={1}>
      <HouseholdBillConsolidation />
      <MemberBenefits isHouseHoldProgramPage={true} />
      <WhyChoose />
      <HowItWorks />
      <HowToJoin />
      <EnsureQualitySection />
      <FAQSection />
    </Stack>
  );
};

export default HouseHoldPage;
