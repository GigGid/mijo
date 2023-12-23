import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../../../assets/images";
import { Image, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarForDesktop() {
  return (
    <section className="w-100 py-2 bg-white ">
      <Container className="bg-white">
        <>
          {["lg"].map((expand: any) => (
            <Navbar
              key={expand}
              expand={expand}
              className="bg-body-tertiary mb-3 "
              
            >
              <Container fluid className="d-flex justify-content-between">
                <div className="d-flex align-items-center w-100 justify-content-between">
                  <div>
                    <Navbar.Brand href="/">
                      <Image src={Logo} width="100px" />
                    </Navbar.Brand>
                  </div>
                  <div>
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                          id={`offcanvasNavbarLabel-expand-${expand}`}
                        ></Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <div className="">
                          <Nav className="" variant="underline" defaultActiveKey="/home">
                          <Nav.Item>
                            <NavLink to="/" className="text-decoration-none mx-3">
                              Home
                            </NavLink>
                            </Nav.Item>

                            <NavLink
                              to="about"
                              className="text-decoration-none mx-3"
                            >
                              About
                            </NavLink>

                            <NavLink
                              to="/contact"
                              className="text-black text-decoration-none mx-3"
                            >
                              Contact Us
                            </NavLink>
                          </Nav>
                        </div>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </div>
                </div>
              </Container>
            </Navbar>
          ))}
        </>
      </Container>
    </section>
  );
}

export default NavbarForDesktop;
