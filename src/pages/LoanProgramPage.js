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
      title: "Apply For Loans",
      description:
        "Once you are a member, you can apply for any of our loan programs. Enjoy the benefits of flexible financing, no credit check, and competitive rates tailored to your needs.",
      imgSrc: "/assets/howtojoin3.png", // Replace with actual image path
    },
  ];
  return (
    <Stack spacing={1}>
      <LoanProgramsSection />
      <LoanProgramOffers />
      <HowItWorks />
      <MemberBenefits />
      <HowToJoin steps={steps} />
      {/* <LoanCalculator /> */}
      <FAQSection />
      <ConsultationForm />
      <EnsureQualitySection />
    </Stack>
  );
};

export default LoanProgramPage;
