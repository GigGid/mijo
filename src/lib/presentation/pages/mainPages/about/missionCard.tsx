import { Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MissionCard = () => {
  // const team = [
  //   {
  //     name: "Mesh Alloys",
  //     position: "CEO",
  //     image:
  //       "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/618ac079e7dd3985d0f2830c_About-Image%E2%80%94Team%E2%80%94Mesh-Alloys.jpg",
  //   },
  //   {
  //     name: "Malaika Judd",
  //     position: "Chief Investor Relations Officer",
  //     image:
  //       "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/618ac079e7dd39a8e7f2831f_About-Image%E2%80%94Team%E2%80%94Malaika-Judd.jpg",
  //   },
  //   {
  //     name: "Evanson Biwott",
  //     position: "Engineering R&D",
  //     image:
  //       "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/618ac079e7dd3933daf28312_About-Image%E2%80%94Team%E2%80%94Evanson-Biwott.jpg",
  //   },
  //   {
  //     name: "Don Okoth",
  //     position: "GM - Kenya",
  //     image:
  //       "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/618ac079e7dd3962dcf2830f_About-Image%E2%80%94Team%E2%80%94Don-Okoth.jpg",
  //   },
  // ];
  return (
    <section className="mission-card-session">
      <Card
        className="rounded-4 border-0 p-4"
        style={{ background: "#eff6fb" }}
      >
        <Row className="align-items-center service-card  gy-5">
          <Col lg={{order:"first"}}  xs={{order:"last"}}>
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
              src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61b08cc2ef37489ff0a2ed23_3.jpg"
              alt="img"
              style={{ width: "100%", height: "100%" , objectPosition:"top"}}
            />
          </Col>
          <Col lg={{order:"last"}}  xs={{order:"last"}}>
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

      <Card className="p-5 border-0 contact-us-bg">
        <div className="contact-us">
          <p className="fw-bold fs-1 text-primary">Contact Us</p>
          <Row className="align-items-center gy-5">
            <Col md={12} lg={6} >
              <div className=" fw-bold text-primary contact-us-text">
                Get in touch with our team today to discuss your logistics
                needs. You can reach us by phone, email, or through our
                website's contact form.
              </div>
              <div className="mt-3  fw-bold text-primary contact-us-text">
                Let Mijo be your trusted logistics partner. Contact us for a
                consultation or to learn more about how we can help your online
                and e-commerce business thrive.
              </div>
            </Col>
            <Col className="d-lg-flex justify-content-end contact-us-btn">
              <div>
                <Link
                  to="/mailto:"
                  className="bg-secondary p-3 text-white rounded-3 shadow-lg text-decoration-none"
                >
                  Send us a message
                </Link>
              </div>
            </Col>
          </Row>
          <p></p>
        </div>
      </Card>

      {/* <Card
        className="rounded-4 border-0 mt-5 p-4"
        style={{ background: "white" }}
      >
        <div className="team-card-header fw-bold fs-3 text-center">
          The Founding Team
        </div>
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
      </Card> */}
    </section>
  );
};
