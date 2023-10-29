import { Button, Col, Container, Navbar, NavItem, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { BsListStars } from "react-icons/bs";

function NavbarForTablet() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const canvasStyle={
    height: "250px",
    background: 'white',
    marginRight: "3%",
    borderRadius: "20px",
    marginTop: "1%",
    border: "none",
  }

  return (
    <div className="w-100 py-2 shadow-sm border-bottom">
      <Container>
        <div className="d-flex justify-content-between">
          <div className="fs-1 fw-bold text-primary">Farm House</div>
          <div>
            <Button
              variant="light"
              className="shadow-sm me-2"
              onClick={handleShow}
            >
              <BsListStars className="text-primary" />
            </Button>
            <Button className="text-white fw-bold">Become a member</Button>

            <Offcanvas
              classname="p-5 bg-transparent"
              show={show}
              onHide={handleClose}
              placement="end"
              style={canvasStyle}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Navbar>
                  <Row className=" w-100 align-items-center">
                    <Col md={12}>
                      <NavItem className="text-center d-inline ">
                        <NavLink
                          to=""
                          className="active text-decoration-none fw-semibold"
                        >
                          {" "}
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to=""
                          className="active text-muted text-decoration-none fw-semibold "
                        >
                          {" "}
                          Make A Request
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to=""
                          className="active text-muted text-decoration-none fw-semibold"
                        >
                          {" "}
                          Prices
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to=""
                          className="active text-muted text-decoration-none fw-semibold "
                        >
                          {" "}
                          Lorem
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to=""
                          className="active text-muted text-decoration-none fw-semibold "
                        >
                          {" "}
                          Sign In
                        </NavLink>
                      </NavItem>
                    </Col>
                  </Row>
                </Navbar>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavbarForTablet;
