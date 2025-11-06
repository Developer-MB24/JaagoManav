import React from "react";
import HeroWhoWeAre from "../components/WhoWeAre/HeroWhoWeAre";
import WhoWeAreSection from "../components/WhoWeAre/WhoWeAreSection";
import CompanyStatsSection from "../components/WhoWeAre/CompanyStatsSection";
import JourneySection from "../components/WhoWeAre/JourneySection";
import VolunteerCard from "../components/WhoWeAre/VolunteerCard";
import EconestUpcomingEvents from "../components/WhoWeAre/EconestUpcomingEvents";
import ContactBar from "../components/WhoWeAre/ContactBar";
import WhoWeAreTestimonial from "../components/WhoWeAre/WhoWeAreTestimonial";

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
