import React from "react";
import Hero from "../components/home/Hero.jsx";
import WorkProcess from "../components/home/WorkProcess.jsx";
import About from "../components/home/About.jsx";

import StatsStrip from "../components/home/StatsStrip.jsx";
import Services from "../components/home/Services.jsx";
import CharityStrip from "../components/home/CharityStrip.jsx";
import HelpSection from "../components/home/HelpSection.jsx";
import ContactVolunteer from "../components/home/ContactVolunteer.jsx";
import VolunteerSection from "../components/home/VolunteerSection.jsx";
import EventsSection from "../components/home/EventsSection.jsx";
import TestimonialSection from "../components/home/TestimonialSection.jsx";
import CtaDonate from "../components/home/CtaDonate.jsx";
import BlogNewsSection from "../components/home/BlogNewsSection.jsx";
import SubscribeSection from "../components/home/SubscribeSection.jsx";
import LogoSection from "../components/home/LogoSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkProcess />
      <About />
      <StatsStrip />
      <Services />
      <CharityStrip />
      <HelpSection />
      <LogoSection />
      <ContactVolunteer />
      <VolunteerSection />
      <EventsSection />
      <TestimonialSection />
      <CtaDonate />
      <BlogNewsSection />
      <SubscribeSection />
    </>
  );
}
