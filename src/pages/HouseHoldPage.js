import React from "react";
import OurCommitmentSection from "../sections/AboutUs/OurCommitmentSection";
import HouseholdBillConsolidation from "../sections/HouseholdBillConsolidation/HouseholdBillConsolidation";
import WhyChoose from "../sections/HouseholdBillConsolidation/WhyChooseCard";
import HowToJoin from "../sections/LoanPrograms/HowToJoin";
import EnsureQualitySection from "../sections/Membership/EnsureQualitySection";
import FAQSection from "../sections/Programs/FAQSection";

const HouseHoldPage = () => {
  return (
    <div>
      <HouseholdBillConsolidation />
      <OurCommitmentSection />
      <WhyChoose />
      <HowToJoin />
      <EnsureQualitySection />
      <FAQSection />
    </div>
  );
};

export default HouseHoldPage;
