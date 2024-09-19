import React from "react";
import InquirySupportSection from "../sections/ContactUs/InquirySupportSection";
import FAQSection from "../sections/Programs/FAQSection";
import ConsultationForm from "../sections/Home/ConsultationForm";
import { Stack } from "@mui/material";

const ContactUsPage = () => {
  return (
    <Stack spacing={1}>
      <InquirySupportSection />
      <FAQSection />
      <ConsultationForm />
    </Stack>
  );
};

export default ContactUsPage;
