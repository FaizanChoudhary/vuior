import React from "react";
import ConsultationForm from "../components/ConsultationForm";
import Footer from "../sections/Footer";
import Header from "../components/Header";
import WelcomeSection from "../sections/WelcomeSection";
import ProgramsSection from "../sections/ProgramsSection";
import WhoWeAreSection from "../sections/WhoWeAreSection";
import OurBasicPrinciplesSection from "../sections/OurBasicPrinciplesSection";

const HomePage = () => (
  <div>
    <Header />
    <ConsultationForm />
    <WelcomeSection />
    <ProgramsSection />
    <WhoWeAreSection />
    <OurBasicPrinciplesSection />
    <Footer />
  </div>
);

export default HomePage;
