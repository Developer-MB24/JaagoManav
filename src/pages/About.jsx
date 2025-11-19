import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutServicesSection from "../components/about/AboutServicesSection";
import AboutVolunteerSection from "../components/about/AboutVolunteerSection";
import AboutOurServices from "../components/about/AboutOurServices";
import CallToActionSection from "../components/about/CallToActionSection";
import DonationCausesSection from "../components/about/DonationCausesSection";
import WhyChooseUsSection from "../components/about/WhyChooseUsSection";
import FAQSection from "../components/about/FAQSection";
import TrustedCompaniesCarousel from "../components/about/TrustedCompaniesCarousel";
import VideoSection from "../components/about/VideoSection";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutServicesSection />
      <AboutVolunteerSection />
      <AboutOurServices />
      <CallToActionSection />
      <DonationCausesSection />
      <WhyChooseUsSection />
      <VideoSection />
      <FAQSection />
      <TrustedCompaniesCarousel />
    </>
  );
}
