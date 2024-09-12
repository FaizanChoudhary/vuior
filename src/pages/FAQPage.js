import React from "react";
import Header from "../components/Header";
import FAQItem from "../components/FAQItem";
import Footer from "../sections/Footer";

const FAQPage = () => (
  <div>
    <Header />
    <div style={{ padding: "20px" }}>
      <FAQItem
        question="How do I sign up for Vuior?"
        answer="Click the sign up button and follow the instructions."
      />
      <FAQItem
        question="What is Vuior?"
        answer="Vuior is a platform offering financial solutions."
      />
    </div>
    <Footer />
  </div>
);

export default FAQPage;
