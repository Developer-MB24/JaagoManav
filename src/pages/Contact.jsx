import React from "react";
import ContactHero from "../components/contact/ContactHero";
import VolunteerContactForm from "../components/contact/VolunteerContactForm";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import CallToAction from "../components/contact/CallToAction";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <VolunteerContactForm />
      <ContactInfoSection />
      <CallToAction />
    </>
  );
}
