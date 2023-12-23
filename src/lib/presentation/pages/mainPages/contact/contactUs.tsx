import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

export const ContactUs = () => {
  return (
    <section>
      <Container>
        <Card className="p-5 border-0 contact-us-bg">
          <div className="contact-us">
            <p
              className="fw-bold fs-1 text-primary"
              data-aos="fade-bottom"
              data-aos-offset="200"
              data-aos-delay="100"
            >
              Contact Us
            </p>
            <Row className="align-items-center gy-5">
              <Col md={12} lg={6}>
                <div
                  className=" fw-bold text-primary contact-us-text"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="200"
                >
                  Get in touch with our team today to discuss your logistics
                  needs. You can reach us by phone, email, or through our
                  website's contact form.
                </div>
                <div
                  className="mt-3  fw-bold text-primary contact-us-text"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="300"
                >
                  Let Mijo be your trusted logistics partner. Contact us for a
                  consultation or to learn more about how we can help your
                  online and e-commerce business thrive.
                </div>
                <div
                  className="mt-3"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="350"
                >
                  <SiGmail />
                  <a href="mailto:mijoexpress768@gmail.com" className="mx-2">
                    {" "}
                   mijoexpress763@gmail.com
                  </a>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="350"
                >
                  <IoCall />
                  <a href="callto:0502980350" className="mx-2">
                    {" "}
                    0502980350
                  </a>
                </div>
              </Col>
              <Col className="px-5">
                <Form>
                  <Form.Control
                    type="email"
                    placeholder="sample@email.com"
                    size="lg"
                    required
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="400"
                  />
                  <Form.Control
                    as="textarea"
                    placeholder="Message"
                    size="lg"
                    className="my-4"
                    required
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="450"
                  />
                  <div
                    className="d-lg-flex justify-content-end contact-us-btn "
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="500"
                  >
                    <button
                      type="submit"
                      className="bg-secondary p-3 px-5 text-white rounded-3 shadow-lg  border-0 text-decoration-none"
                    >
                      Send us a message
                    </button>
                  </div>
                </Form>
              </Col>
            </Row>
            <p></p>
          </div>
        </Card>
      </Container>
    </section>
  );
};
