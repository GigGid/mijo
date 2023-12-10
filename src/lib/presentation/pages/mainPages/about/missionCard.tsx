import { Card, Col, Image, Row } from "react-bootstrap";
import { Tracking } from "../../../../../assets/images";

export const MissionCard = () => {
  return (
    <section className="mission-card-session">
      <Card
        className="rounded-4 border-0 p-4"
        style={{ background: "#eff6fb" }}
      >
        <Row className="align-items-center service-card  gy-5">
          <Col lg={{ order: "first" }} xs={{ order: "last" }}>
            <div className="fs-3 fw-bold text-primary mb-4">Services</div>
            <div>
              <ul>
                <li>
                  <p className="fw-bold"> Distribution solution</p>
                  <p>
                    {" "}
                    Discover our range of distribution services cover Accra and
                    Tema. Distribution is done based on dwmarcated zones within
                    operating cities. We have drivers allocated to each zone .We
                    streamline the distribution process so as to help our
                    clients focus on growing their online and e-commerce
                    business.
                  </p>
                </li>
                <li>
                  <p className="fw-bold"> E-commerce integration</p>
                  <p>
                    {" "}
                    We offer seamless integration with various e-commerce
                    platforms by providing real time tracking and inventory
                    management. our solutions are best designed to enhance your
                    online experience
                  </p>
                </li>
                <li>
                  <p className="fw-bold">Specialized handling</p>
                  <p>
                    With Mijo, it does not matter the items. whether fragile
                    items, perishable goods or non perishable .our team has the
                    expertise to handle the specialized requirement .
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <Image
              className="rounded-4"
              src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/636189e34cdd2935bbb698aa_sendy_image.jpg"
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Card>

      <Card
        className="rounded-4 border-0 mt-5 p-3"
        style={{ background: "white" }}
      >
        <Row className="align-items-center solution-card rounded-4 gy-5 ">
          <Col md={12} lg={6}>
            <Image
              className="rounded-4"
              src={Tracking}
              alt="img"
              style={{ width: "100%", height: "100%", objectPosition: "cover" }}
            />
          </Col>
          <Col lg={{ order: "last" }} xs={{ order: "last" }} className="mb-5">
            <div className="fs-3 fw-bold text-primary  mb-4 ">Solution</div>
            <div>
              <ul>
                <li>
                  <p className="fw-bold"> Customization </p>
                  <p>
                    {" "}
                    At Mijo, we understand that every business has unique
                    logistics challenges. That is why we offer customized
                    solutions to meet your specific needs. We work closely with
                    you to design a logistics strategy that optimize your supply
                    chain and improves efficiency.{" "}
                  </p>
                </li>
                <li>
                  <p className="fw-bold"> Technology and Tracking</p>
                  <p>
                    With our tracking systems, you have full visibility into
                    your orders at every stage. Real-time updates and advanced
                    features allow you to make informed decisions and streamline
                    your logistics operations.
                  </p>
                </li>
                <li>
                  <p className="fw-bold"> Value-added Services</p>
                  <p>
                    {" "}
                    In addition to our core distribution services, we offer
                    additional value-added services such as product packaging,
                    and customized labeling. These services further enhance your
                    overall logistics operations and efficiency.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};
