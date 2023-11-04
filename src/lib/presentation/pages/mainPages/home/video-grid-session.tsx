import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./home.scss";
import { Link } from "react-router-dom";

function VideoGridSession() {
  return (
    <>
      <section className=" home-menu pt-4 pb-3 ">
        <Container>
          <Row className="my-5 align-items-center">
            <Col>
              <div className="d-block ">
                {/* <div className="video-session-grid-text">
                  Consolidate deliveries
                </div>
                <div className="video-session-grid-text">Save money.</div> */}
                <p className="mb-3 fs-4 fw-bold">
                  Welcome to Mijo ,trusted logistics and transportation company
                  specializing in digital fulfilment of services across Africa
                  and enable easy movement of goods across borders.
                </p>
                <p className="fw-light">
                  With Mijo, you can expect seamless movement of goods across
                  borders, efficient digital fulfilment and commitment to
                  meeting customer expectation
                </p>
                <p className="fw-light">
                  Explore our services or contact us to learn more about how we
                  optimize your logistics and supply chain management to enhance
                  your business operations.
                </p>
              </div>
              <div className="mt-5">
                <Link
                  to="/about"
                  className="grid-btn border-0 py-3 text-white rounded-3 text-decoration-none px-4"
                >
                  Explore our service
                </Link>
              </div>
            </Col>
            <Col lg={7} md={12}>
              <Image
                src="http://via.placeholder.com/640x360"
                className="rounded-5"
                style={{ objectFit: "cover", width: "100%" }}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VideoGridSession;
