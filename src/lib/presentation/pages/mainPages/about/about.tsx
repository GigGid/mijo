import { GridSession } from "./gridSession";
import './about.scss'
import { MissionCard } from "./missionCard";
import { Container } from "react-bootstrap";

export const About = () => {
  return (
    <section className="about-section">
      <Container>
      <GridSession />
      <MissionCard/>
      </Container>
    </section>
  );
};
