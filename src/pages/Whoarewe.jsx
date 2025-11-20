import React from "react";
import Hero from "../components/whoarewe/Hero";
import WhoWeAreSection from "../components/whoarewe/WhoWeAreSection";
import Testimonial from "../components/whoarewe/Testimonial";

import CompanyStatsSection from "../components/whoarewe/CompanyStatsSection.jsx";
import JourneySection from "../components/whoarewe/JourneySection.jsx";
import VolunteerCard from "../components/whoarewe/VolunteerCard.jsx";
import EconestUpcomingEvents from "../components/whoarewe/EconestUpcomingEvents.jsx";

import ContactBar from "../components/whoarewe/ContactBar.jsx";

// import WhoWeAreSection from "../components/whoweare/WhoWeAreSection.jsx";
// import Hero from "../components/whoweare/Hero.jsx";
// import Testimonial from "../components/whoweare/Testimonial.jsx";

export default function Whoarewe() {
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
