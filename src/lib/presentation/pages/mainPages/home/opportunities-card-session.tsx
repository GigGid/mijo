import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";

export const OpportunitiesCardSession = () => {
  const data = [
    {
      title: "ONLINE & E-COMMERCE SELLERS SOLUTIONS",
      description: "Get your orders flowing effortlessly",
      body: "Say goodbye to time consuming follow-ups with customers and riders. Free more time to grow your business.",
      background: "#fef3e8",
    },
    {
      title: "MANUFACTURERS & DISTRIBUTOR SOLUTIONS",
      description: "From warehouse to shelves, zero headaches",
      body: "Fulfill orders to supermarkets, businesses & consumers more reliably and affordably without thinking about logistics.",
      background: "#edf9ff",
    },
    {
      title: "CARGO AND PACKAGES TRANSPORT SOLUTIONS",
      description: "Reliable delivery for goods countrywide",
      body: "Deliver anything, anywhere at anytime. Get access to 100s of vetted and trained transporters.",
      background: "#ecedf1",
    },
  ];

  return (
    <section className="opportunity-card-session">
      <Container>
        <div className="text-center fw-bold card-header-text">
          Unlocking opportunities for businesses
        </div>
        <Row>
          {data.map((item, key) => (
            <Col key={key}>
              <Card style={{background:item.background}} className="border-0 opportunity-card">
                <Card.Img
                  src="http://via.placeholder.com/640x360"
                  alt=""
                  style={{ width: "100%", height: "300px" }}
                  className="card-img"
                />
                <Card.Body className="card-body-side">
                  <div className="card-title">{item.title}</div>
                  <div className="card-description text-primary fw-normal">{item.description}</div>
                  <div className="card-body p-0 m-0 mt-3 ">{item.body}</div>
                  
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent py-3">
                <div className="card-link fw-bold">
                    <a href="#"className="text-decoration-none"> LEARN MORE </a>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
