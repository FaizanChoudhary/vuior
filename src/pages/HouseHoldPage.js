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
  const steps = [
    {
      number: 1,
      title: "Free Membership",
      description:
        "Joining vuior is free. Simply sign up to become a member and gain access to our loan programs and other valuable services.",
      imgSrc: "/assets/howtojoin1.png", // Replace with actual image path
    },
    {
      number: 2,
      title: "Minimum Account Balance",
      description:
        "To keep your membership active, maintain a minimum account balance of $25. This ensures continuous access to all vuior benefits and services.",
      imgSrc: "/assets/howtojoin2.png", // Replace with actual image path
    },
    {
      number: 3,
      title: "Apply For Bill Consolidation",
      description:
        "Once you are a member, you can apply for our household bill consolidation program. Enjoy the benefits of group negotiated discounts, no credit checks, and comprehensive coverage for all your household bills.",
      imgSrc: "/assets/howtojoin3.png", // Replace with actual image path
    },
  ];
  return (
    <Stack spacing={1}>
      <HouseholdBillConsolidation />
      <MemberBenefits isHouseHoldProgramPage={true} />
      <WhyChoose />
      <HowItWorks />
      <HowToJoin steps={steps} />
      <EnsureQualitySection />
      <FAQSection />
    </Stack>
  );
};

export default HouseHoldPage;
