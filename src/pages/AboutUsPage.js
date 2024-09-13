import React from "react";
import AboutVuoirSection from "../sections/AboutUs/AboutVuoirSection";
import OurCommitmentSection from "../sections/AboutUs/OurCommitmentSection";
import OurProgramsSection from "../sections/Programs/OurProgramsSection";
import EnsureQualitySection from "../sections/Membership/EnsureQualitySection";
import JoinUsSection from "../sections/AboutUs/JoinUsSection";
import ConsultationForm from "../sections/Home/ConsultationForm";

const AboutUsPage = () => {
  return (
    <div>
      <AboutVuoirSection />
      <OurCommitmentSection />
      <OurProgramsSection />
      <EnsureQualitySection />
      <JoinUsSection />
      <ConsultationForm />
    </div>
  );
};

export default AboutUsPage;
