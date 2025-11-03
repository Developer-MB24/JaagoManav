import React from "react";
import ServiceHero from "../components/service/ServiceHero";
import ServiceAbout from "../components/service/ServiceAbout";
import ServiceWhatWeDo from "../components/service/ServiceWhatWeDo";
import ServiceCampaigns from "../components/service/ServiceCampaigns";
import CompletedProjects from "../components/service/CompletedProjects";
import ServiceTestimonial from "../components/service/ServiceTestimonial";
import UpcomingEvent from "../components/service/UpcomingEvent";

export default function service() {
  return (
    <>
      <ServiceHero />
      <ServiceAbout />
      <ServiceWhatWeDo />
      <ServiceCampaigns />
      <CompletedProjects />
      <ServiceTestimonial />
      <UpcomingEvent />
    </>
  );
}
