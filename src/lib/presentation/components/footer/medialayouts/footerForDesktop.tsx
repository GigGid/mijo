import { Container, Image } from "react-bootstrap";
import { Logo } from "../../../../../assets/images";

function FooterForDesktop() {
  return (
    <section className="footer-section">
      <Container className="py-5">
        <div className="d-flex flex-wrap jusify-content-between ">
          <div className="mx-3">
            <Image src={Logo} className="px-5" />
          </div>
          <div className="footer-grid">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="mx-4 mb-3">
                <p className="fs-6 fw-bold text-primary">Support</p>
                <p>Contact Us</p>
                <p>Security</p>
              </div>

              <div className="mx-4 mb-3">
                <p className="fs-6 fw-bold text-primary">Solutions</p>
                <p>Online & E-commerce</p>
                <p>Manufacturers & Distributors</p>
                <p>Packages & Cargo Transport</p>
              </div>

              <div className="mx-4 mb-3">
                <p className="fs-6 fw-bold text-primary">Resource Hub</p>
                <p>In the Press</p>
                <p>Blog</p>
                <p>Fulfillment Help Center</p>
                <p>FAQs</p>
                <p>Testimonials</p>
                <p>Careers</p>
              </div>

              <div className="mx-4 mb-3">
                <p className="fs-6 fw-bold text-primary">Policies</p>
                <p>Terms of Service</p>
                <p>Privacy</p>
                <p>Driver Privacy</p>
                <p>Freight Transporter Terms</p>
                <p>Freight Shipper Terms</p>
                <p>Supply Terms</p>
              </div>

              <div className="mx-4">
                <p className="fs-6 fw-bold text-primary">Partner Resources</p>
                <p>Partner Resources</p>
                <p>Owner Login</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FooterForDesktop;
