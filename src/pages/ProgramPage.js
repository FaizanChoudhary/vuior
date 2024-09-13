import React from "react";
import FinancialFreedomSection from "../sections/Programs/FinancialFreedomSection";
import OurProgramsSection from "../sections/Programs/OurProgramsSection";
import HowToBecomeMember from "../sections/Programs/HowToBecomeMember";
import ConsultationForm from "../sections/Home/ConsultationForm";
import FAQSection from "../sections/Programs/FAQSection";
import EnsureQualitySection from "../sections/Membership/EnsureQualitySection";

const ProgramPage = () => {
  return (
    <div>
      <FinancialFreedomSection />
      <OurProgramsSection />
      <HowToBecomeMember />
      <EnsureQualitySection />
      <ConsultationForm />
      <FAQSection />
    </div>
  );
};

export default ProgramPage;
