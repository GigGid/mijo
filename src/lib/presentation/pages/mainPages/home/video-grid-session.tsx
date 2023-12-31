import { Col, Container, Image, Row } from "react-bootstrap";
import "./home.scss";
import { Link } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";
import { Logistics } from "../../../../../assets/images";

function VideoGridSession() {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      md: 0,
      lg: 1400,
    },
  });
  return (
    <>
      <section className=" home-menu pt-4 pb-3 ">
        <MediaContextProvider>
          <Media at="lg">
            <Container>
              <Row className="my-5 gy-5 align-items-center">
                <Col lg={{ order: "first" }}>
                  <div className="d-block ">
                    <p
                      className="mb-3 fs-4 fw-bold"
                      data-aos="fade-bottom"
                      data-aos-offset="200"
                      data-aos-delay="100"
                    >
                      Welcome to Mijo, your trusted logistics and transportation
                      company specializing in digital fulfilment of services
                      across Africa and enable easy movement of goods across
                      borders.
                    </p>
                    <p
                      className="fw-light"
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="200"
                    >
                      With Mijo, you can expect seamless movement of goods
                      across borders, efficient digital fulfilment and
                      commitment to meeting customer expectation.
                    </p>
                    <p
                      className="fw-light"
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="300"
                    >
                      Explore our services or contact us to learn more about how
                      we optimize your logistics and supply chain management to
                      enhance your business operations.
                    </p>
                  </div>
                  <div
                    className="mt-5"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="400"
                  >
                    <Link
                      to="/about"
                      className="grid-btn border-0 py-3 text-white rounded-3 text-decoration-none px-4"
                    >
                      Explore our service
                    </Link>
                  </div>
                </Col>
                <Col
                  lg={7}
                  md={{ order: "first" }}
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="300"
                >
                  <Image
                    src={Logistics}
                    className="rounded-5"
                    style={{ objectFit: "cover", width: "100%" }}
                    alt=""
                  />
                </Col>
              </Row>
            </Container>
          </Media>
          <Media at="md">
            <Container>
              <Row className="my-5 gy-5 align-items-center">
                <Col lg={{ order: "first" }}>
                  <div className="d-block ">
                    <p
                      className="mb-3 fw-bold  vid-header"
                      data-aos="fade-bottom"
                      data-aos-offset="200"
                      data-aos-delay="100"
                    >
                      Welcome to Mijo, your trusted logistics and transportation
                      company specializing in digital fulfilment of services
                      across Africa. We enable easy movement of goods across
                      borders.
                    </p>
                    <div
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-delay="200"
                    >
                      <Image
                        src={Logistics}
                        className="rounded-5"
                        style={{ objectFit: "cover", width: "100%" }}
                        alt=""
                      />
                    </div>
                    <div className="text-center mt-5 vid-body">
                      <p
                        className="fw-light"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="300"
                      >
                        With Mijo, you can expect seamless movement of goods
                        across borders, efficient digital fulfilment and
                        commitment to meeting customer expectation. Explore our
                        services or contact us to learn more about how we
                        optimize your logistics and supply chain management to
                        enhance your business operations.
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-5 vid-btn text-center"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="400"
                  >
                    <Link
                      to="/about"
                      className="grid-btn border-0 py-3 text-white rounded-3 text-decoration-none px-4"
                    >
                      Explore our service
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Media>
        </MediaContextProvider>
      </section>
    </>
  );
}

export default VideoGridSession;
