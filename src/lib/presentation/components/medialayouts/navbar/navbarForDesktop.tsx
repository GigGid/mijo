import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Form, NavLink } from "react-router-dom";
import { Logo } from "../../../../../assets/images";
import { Dropdown, Image, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function NavbarForDesktop() {
  const [solutionDropdown, setSolutionDropdown] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);

  const handleMouseEnter = () => {
    setSolutionDropdown(true);
  };

  const handleMouseLeave = () => {
    setSolutionDropdown(false);
  };

  const handleMouseEnter1 = () => {
    setResourceDropdown(true);
  };

  const handleMouseLeave1 = () => {
    setResourceDropdown(false);
  };

  return (
    <section className="w-100 py-2 bg-white ">
      <Container className="bg-white">
        {/* <Navbar expand="lg" sticky="top" className="bg-body-tertiary ">
          <Container>
            <div className="d-flex align-items-center w-100 justify-content-between">
              <div>
                <Navbar.Brand href="/">
                  <Image src={Logo} width="100px"/>
                </Navbar.Brand>
              </div>
              <div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <div className="d-flex justify-content-end">
                    <Nav className="align-items-center">
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Dropdown show={solutionDropdown}>
                          <Dropdown.Toggle
                            variant="transparent"
                            className="border-0 bg-transparent "
                            id="hover-dropdown"
                          >
                            Solution
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="border-0 rounded-4 dropdown-menu-item">
                            <Dropdown.Item className="dropdown-menu-item mb-3 bg-transparent">
                              <NavLink to="/solution" className="text-decoration-none">
                                Online & E-commerce
                              </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-menu-item mb-3 bg-transparent">
                              <NavLink to="/manufacturing" className="text-decoration-none">
                                Manufacturing & Distributors
                              </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-menu-item mb-3 bg-transparent">
                              <NavLink to="/packages" className="text-decoration-none">
                                Packages & Cargos
                              </NavLink>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <Nav.Link href="/about" className="text-black">About Us</Nav.Link>
                      <div
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                      >
                        <Dropdown show={resourceDropdown}>
                          <Dropdown.Toggle
                            variant="transparent"
                            className="border-0 bg-transparent"
                            id="hover-dropdown"
                          >
                            Resource Hub
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="border-0 rounded-4 dropdown-menu-item">
                            <Dropdown.Item className="dropdown-menu-item">
                              <Nav.Link href="/">
                                Fulfillment Help Center
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-menu-item">
                              <Nav.Link href="/">
                               Blog
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-menu-item">
                              <Nav.Link href="/">
                               In the press
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-menu-item">
                              <Nav.Link href="/">
                               FAQs
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-menu-item">
                              <Nav.Link href="/">
                               Testimonials
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-menu-item">
                              <Nav.Link href="/">
                               Careers
                              </Nav.Link>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <Nav.Link href="/" className="text-black">Contact Us</Nav.Link>

                      <Button
                        variant="secondary"
                        className="text-white  mx-3 p-2"
                      >
                        Fulfillment Login
                      </Button>
                      <Button className="text-white p-2">
                        Transport Login
                      </Button>
                    </Nav>
                  </div>
                </Navbar.Collapse>
              </div>
            </div>
          </Container>
        </Navbar> */}
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
                          <Nav className="">
                            <div
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              <Dropdown show={solutionDropdown}>
                                <Dropdown.Toggle
                                  variant="transparent"
                                  className="border-0 bg-transparent p-0 mt-2 me-2"
                                  id="hover-dropdown"
                                >
                                  Solution
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="border-0 rounded-4 dropdown-menu-item">
                                  <Dropdown.Item className="dropdown-menu-item mb-3 bg-transparent">
                                    <NavLink
                                      to="/solution"
                                      className="text-decoration-none"
                                    >
                                      Online & E-commerce
                                    </NavLink>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="dropdown-menu-item mb-3 bg-transparent">
                                    <NavLink
                                      to="/manufacturing"
                                      className="text-decoration-none"
                                    >
                                      Manufacturing & Distributors
                                    </NavLink>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="dropdown-menu-item mb-3 bg-transparent">
                                    <NavLink
                                      to="/packages"
                                      className="text-decoration-none"
                                    >
                                      Packages & Cargos
                                    </NavLink>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>

                            <Nav.Link href="/about" className="text-black">
                              About Us
                            </Nav.Link>
                            <div
                              onMouseEnter={handleMouseEnter1}
                              onMouseLeave={handleMouseLeave1}
                              
                            >
                              <Dropdown show={resourceDropdown}>
                                <Dropdown.Toggle
                                  variant="transparent"
                                  className="border-0 bg-transparent p-0 mt-2 me-2"
                                  id="hover-dropdown"
                                  // className="p-0 m-0"
                                >
                                  Resource Hub
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="border-0 rounded-4 dropdown-menu-item">
                                  <Dropdown.Item className="dropdown-menu-item">
                                    <Nav.Link href="/">
                                      Fulfillment Help Center
                                    </Nav.Link>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="dropdown-menu-item">
                                    <Nav.Link href="/">Blog</Nav.Link>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="dropdown-menu-item">
                                    <Nav.Link href="/">In the press</Nav.Link>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="dropdown-menu-item">
                                    <Nav.Link href="/">FAQs</Nav.Link>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="dropdown-menu-item">
                                    <Nav.Link href="/">Testimonials</Nav.Link>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="dropdown-menu-item">
                                    <Nav.Link href="/">Careers</Nav.Link>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>

                            <Nav.Link href="/" className="text-black">
                              Contact Us
                            </Nav.Link>

                            <Button
                              variant="secondary"
                              className="text-white mb-2 mx-2 p-2"
                            >
                              Fulfillment Login
                            </Button>
                            <Button className="text-white p-2 mb-2 mx-2">
                              Transport Login
                            </Button>
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
