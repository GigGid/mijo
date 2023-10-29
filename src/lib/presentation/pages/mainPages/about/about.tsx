import React from "react";
import { GridSession } from "./gridSession";
import './about.scss'
import { MissionCard } from "./missionCard";

export const About = () => {
  return (
    <section className="about-section">
      <GridSession />
      <MissionCard/>
    </section>
  );
};
