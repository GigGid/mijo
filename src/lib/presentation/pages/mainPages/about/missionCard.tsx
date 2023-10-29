import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

export const MissionCard = () => {
  const team = [
    {
      name: "Mesh Alloys",
      position: "CEO",
      image:
        "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/618ac079e7dd3985d0f2830c_About-Image%E2%80%94Team%E2%80%94Mesh-Alloys.jpg",
    },
    {
      name: "Malaika Judd",
      position: "Chief Investor Relations Officer",
      image:
        "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/618ac079e7dd39a8e7f2831f_About-Image%E2%80%94Team%E2%80%94Malaika-Judd.jpg",
    },
    {
      name: "Evanson Biwott",
      position: "Engineering R&D",
      image:
        "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/618ac079e7dd3933daf28312_About-Image%E2%80%94Team%E2%80%94Evanson-Biwott.jpg",
    },
    {
      name: "Don Okoth",
      position: "GM - Kenya",
      image:
        "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/618ac079e7dd3962dcf2830f_About-Image%E2%80%94Team%E2%80%94Don-Okoth.jpg",
    },
  ];
  return (
    <section className="mission-card-session">
      <Card
        className="rounded-4 border-0 p-4"
        style={{ background: "#eff6fb" }}
      >
        <Row className="align-items-center">
          <Col>
            <div className="fs-3 fw-bold text-primary">Our Mission</div>
            <div>
              Empower people and businesses by making it easier to trade.
            </div>
          </Col>
          <Col>
            <Image
              className="rounded-4"
              src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/636189e34cdd2935bbb698aa_sendy_image.jpg"
              alt="img"
              style={{ width: "100%", height: "400px"}}
            />
          </Col>
        </Row>
      </Card>

      <Card
        className="rounded-4 border-0 mt-5 p-4"
        style={{ background: "white" }}
      >
        <Row className="align-items-center">
          <Col>
            <Image
              className="rounded-4"
              src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61b08cc2ef37489ff0a2ed23_3.jpg"
              alt="img"
              style={{ width: "100%", height: "400px" }}
            />
          </Col>
          <Col>
            <div className="fs-3 fw-bold text-primary">Our Vision</div>
            <div>Power Africa’s growth by making it easier to trade.</div>
          </Col>
        </Row>
      </Card>

      <Card
        className="rounded-4 border-0 mt-5 p-4"
        style={{ background: "white" }}
      >
        <div className="team-card-header fw-bold fs-3 text-center">The Founding Team</div>
        <Row className="align-items-center">
          {team.map((data, key) => (
            <>
              {data.name === "Malaika Judd" ? (
                <Col key={key} className="mt-4">
                  <div>
                    <Image
                      className="rounded-4"
                      src={data.image}
                      alt="img"
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>

                  <div className="mt-3 fw-bold text-primary">{data.name}</div>
                  <div>{data.position}</div>
                </Col>
              ) : (
                <Col key={key}>
                  <div>
                    <Image
                      className="rounded-4"
                      src={data.image}
                      alt="img"
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>

                  <div className="mt-3 fw-bold text-primary">{data.name}</div>
                  <div>{data.position}</div>
                </Col>
              )}
            </>
          ))}
        </Row>
      </Card>
    </section>
  );
};
