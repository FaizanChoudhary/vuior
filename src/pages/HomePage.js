import React from "react";
import ConsultationForm from "../sections/Home/ConsultationForm";
import OurBasicPrinciplesSection from "../sections/Home/OurBasicPrinciplesSection";
import ProgramsSection from "../sections/Home/ProgramsSection";
import WelcomeSection from "../sections/Home/WelcomeSection";
import WhoWeAreSection from "../sections/Home/WhoWeAreSection";

const HomePage = () => (
  <div>
    <ConsultationForm />
    <WelcomeSection />
    <ProgramsSection />
    <WhoWeAreSection />
    <OurBasicPrinciplesSection />
  </div>
);

export default HomePage;
