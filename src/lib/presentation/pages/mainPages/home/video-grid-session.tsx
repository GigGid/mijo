import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./home.scss";

function VideoGridSession() {
  return (
    <>
      <section className=" home-menu pt-4 pb-3 ">
        <Container>
          <Row className="my-5">
            <Col>
              <div className="d-block mt-5">
                <div className="video-session-grid-text">
                  Consolidate deliveries
                </div>
                <div className="video-session-grid-text">Save money.</div>
                <p className="mb-3">
                  Fulfill order reliably,affordable & at any scale
                </p>
                <p>
                  More opportunities for manufacturers, distributors and
                  e-commerce sellers to scale effortlessly and affordably.
                </p>
              </div>
              <div>
                <Button className="grid-btn border-0">Get Quote</Button>
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
