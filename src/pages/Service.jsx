import React from "react";
import ServiceHero from "../components/service/ServiceHero";
import ServiceAbout from "../components/service/ServiceAbout";
import ServiceWhatWeDo from "../components/service/ServiceWhatWeDo";
import ServiceCampaigns from "../components/service/ServiceCampaigns";

export default function service() {
  return (
    <>
      <ServiceHero />
      <ServiceAbout />
      <ServiceWhatWeDo />
      <ServiceCampaigns />
    </>
  );
}
