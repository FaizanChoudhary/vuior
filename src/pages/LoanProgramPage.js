import React from "react";
import LoanProgramsSection from "../sections/LoanPrograms/LoanProgramsSection";
import LoanProgramOffers from "../sections/LoanPrograms/LoanProgramOffers";
import HowItWorks from "../sections/LoanPrograms/HowItWorksCard";
import MemberBenefits from "../sections/LoanPrograms/MemberBenefits";
import HowToJoin from "../sections/LoanPrograms/HowToJoin";
import LoanCalculator from "../sections/LoanPrograms/LoanCalculator";
import FAQSection from "../sections/Programs/FAQSection";
import ConsultationForm from "../sections/Home/ConsultationForm";
import EnsureQualitySection from "../sections/Membership/EnsureQualitySection";

const LoanProgramPage = () => {
  return (
    <div>
      <LoanProgramsSection />
      <LoanProgramOffers />
      <HowItWorks />
      <MemberBenefits />
      <HowToJoin />
      <LoanCalculator />
      <FAQSection />
      <ConsultationForm />
      <EnsureQualitySection />
    </div>
  );
};

export default LoanProgramPage;
