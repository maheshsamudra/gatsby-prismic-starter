import React, { useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "gatsby";

const expand = "md";

const Layout = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);
  return (
    <div>
      <Navbar
        bg="light"
        expand={expand}
        className="mb-3"
        collapseOnSelect={true}
        expanded={expanded}
      >
        <Container fluid={"xxl"}>
          <Navbar.Brand as="div">
            <Link to={"/"}>Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={() => setExpanded(true)}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            onHide={closeMenu}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" as={"ul"}>
                <Nav.Link as="li">
                  <Link to={"/"} onClick={closeMenu}>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link as="li">
                  <Link to={"/sub-page"} onClick={closeMenu}>
                    Sub Page
                  </Link>
                </Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  as={"ul"}
                >
                  <NavDropdown.Item as="ul">
                    <Link to={"/sub-page"} onClick={closeMenu}>
                      Action
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;
