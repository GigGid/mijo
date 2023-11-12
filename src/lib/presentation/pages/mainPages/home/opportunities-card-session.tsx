import { createMedia } from "@artsy/fresnel";
import { Card, Col, Container, Row } from "react-bootstrap";

export const OpportunitiesCardSession = () => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 768,
      lg: 1400,
    },
  });

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
      <MediaContextProvider>
        <Media at="lg">
          <Container>
            <div className="text-center fw-bold card-header-text">
              Unlocking opportunities for businesses
            </div>
            <Row>
              {data.map((item, key) => (
                <Col key={key}>
                  <Card
                    style={{ background: item.background }}
                    className="border-0 opportunity-card"
                  >
                    <Card.Img
                      src="http://via.placeholder.com/640x360"
                      alt=""
                      style={{ width: "100%", height: "300px" }}
                      className="card-img "
                    />
                    <Card.Body className="card-body-side">
                      <div className="card-title">{item.title}</div>
                      <div className="card-description text-primary fw-normal">
                        {item.description}
                      </div>
                      <div className="card-body p-0 m-0 mt-3 ">{item.body}</div>
                    </Card.Body>
                    <Card.Footer className="border-0 bg-transparent py-3">
                      <div className="card-link fw-bold">
                        <a href="/" className="text-decoration-none">
                          {" "}
                          LEARN MORE{" "}
                        </a>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Media>
        <Media at="md">
          <Container>
            <div className="text-center fw-bold card-header-text">
              Unlocking opportunities for businesses
            </div>
            <Row className="gy-5 gx-3">
              {data.map((item, key) => (
                <Col key={key} md={12}>
                  <Card
                    style={{ background: item.background }}
                    className="border-0 opportunity-card"
                  >
                    <Row>
                      <Col>
                        <Card.Img
                          src="http://via.placeholder.com/640x360"
                          alt=""
                          style={{ width: "100%", height: "300px" }}
                          className="card-img"
                        />
                      </Col>
                      <Col>
                        <Card.Body className="card-body-side">
                          <div className="card-title">{item.title}</div>
                          <div className="card-description text-primary fw-normal">
                            {item.description}
                          </div>
                          <div className="card-body p-0 m-0 mt-3 ">
                            {item.body}
                          </div>
                        </Card.Body>
                        <Card.Footer className="border-0 bg-transparent py-3">
                          <div className="card-link fw-bold text-end">
                            <a href="/" className="text-decoration-none px-4">
                              {" "}
                              LEARN MORE{" "}
                            </a>
                          </div>
                        </Card.Footer>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Media>
        <Media at="sm">
          <div className="text-center fs-1 fw-bold card-header-text">
            Unlocking opportunities for businesses
          </div>
          <Row className="d-flex flex-nowrap overflow-auto gx-5 gy-5 px-5 w-100">
            {data.map((item, key) => (
              <Card
                key={key}
                style={{ background: item.background }}
                className="border-0 mx-2 opportunity-sm-card  card-col-for-mobile"
              >
                <Card.Img
                  src="http://via.placeholder.com/640x360"
                  alt=""
                  style={{ width: "100%", height: "300px" }}
                  className="card-img "
                />
                <Card.Body className="card-body-side">
                  <div className="card-title ">{item.title}</div>
                  <div className="card-description text-primary fw-normal fs-2">
                    {item.description}
                  </div>
                  <div className="card-body p-0 m-0 mt-3 ">{item.body}</div>
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent py-3">
                  <div className="card-link fw-bold">
                    <a href="/" className="text-decoration-none">
                      {" "}
                      LEARN MORE{" "}
                    </a>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </Row>
        </Media>
      </MediaContextProvider>
    </section>
  );
};
