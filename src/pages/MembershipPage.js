import React from "react";
import WelcomeMembershipSection from "../sections/Membership/WelcomeMembershipSection";
import WhyJoinSection from "../sections/Membership/WhyJoinSection";
import MembershipBenefits from "../sections/Membership/MembershipBenefits";
import HowToBecomeMember from "../sections/Programs/HowToBecomeMember";
import OurProgramsSection from "../sections/Programs/OurProgramsSection";
import FAQSection from "../sections/Programs/FAQSection";
import ConsultationForm from "../sections/Home/ConsultationForm";
import EnsureQualitySection from "../sections/Membership/EnsureQualitySection";

const MembershipPage = () => {
  return (
    <div>
      <WelcomeMembershipSection />
      <WhyJoinSection />
      <MembershipBenefits />
      <HowToBecomeMember />
      <OurProgramsSection />
      <FAQSection />
      <ConsultationForm />
      <EnsureQualitySection />
    </div>
  );
};

export default MembershipPage;
