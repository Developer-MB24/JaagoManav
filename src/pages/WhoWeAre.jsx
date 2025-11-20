import React from "react";

import CompanyStatsSection from "../components/whoweare/CompanyStatsSection.jsx";
import JourneySection from "../components/whoweare/JourneySection.jsx";
import VolunteerCard from "../components/whoweare/VolunteerCard.jsx";
import EconestUpcomingEvents from "../components/whoweare/EconestUpcomingEvents.jsx";

import ContactBar from "../components/whoweare/ContactBar.jsx";

import WhoWeAreSection from "../components/whoweare/WhoWeAreSection.jsx";
import Hero from "../components/whoweare/Hero.jsx";
import Testimonial from "../components/whoweare/Testimonial.jsx";

export default function Whoweare() {
  return (
    <>
      <Hero />
      <WhoWeAreSection />
      <CompanyStatsSection />
      <JourneySection />
      <VolunteerCard />
      <Testimonial />
      <EconestUpcomingEvents />
      <ContactBar />
    </>
  );
}
