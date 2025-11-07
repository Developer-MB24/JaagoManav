import React from "react";
import HeroWhoWeAre from "../components/whoweare/HeroWhoWeAre";
import WhoWeAreSection from "../components/whoweare/WhoWeAreSection";
import CompanyStatsSection from "../components/whoweare/CompanyStatsSection";
import JourneySection from "../components/whoweare/JourneySection";
import VolunteerCard from "../components/whoweare/VolunteerCard";
import EconestUpcomingEvents from "../components/whoweare/EconestUpcomingEvents.jsx";

import ContactBar from "../components/whoweare/ContactBar";
import WhoWeAreTestimonial from "../components/whoweare/WhoWeAreTestimonial";

export default function Whoweare() {
  return (
    <>
      <HeroWhoWeAre />
      <WhoWeAreSection />
      <CompanyStatsSection />
      <JourneySection />
      <VolunteerCard />
      <WhoWeAreTestimonial />
      <EconestUpcomingEvents />
      <ContactBar />
    </>
  );
}
