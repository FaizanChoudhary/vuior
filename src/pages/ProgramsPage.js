import React from "react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Footer from "../sections/Footer";

const ProgramsPage = () => (
  <div>
    <Header />
    <div style={{ padding: "20px" }}>
      <InfoCard
        title="Loan Programs"
        description="Unlock financial support with Vuior's loan programs. Flexible terms and quick approval."
      />
      <InfoCard
        title="Household Bills Consolidation Program"
        description="Save up to 25% on household bills with Vuior's consolidation program."
      />
    </div>
    <Footer />
  </div>
);

export default ProgramsPage;
