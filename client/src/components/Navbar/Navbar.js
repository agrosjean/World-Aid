import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";

function Navbar() {
  // const isLoggedIn = localStorage.getItem("id"); // 14 or null;
  // const isAdmin = JSON.parse(localStorage.getItem("admin"));

  // const navigate = useNavigate();
  // const logout = () => {
  //   fetch("/logout", { method: "DELETE" }).then((res) => {
  //     if (res.ok) {
  //       localStorage.clear();
  //       navigate("/login");
  //     }
  //   });
  // };

  return (
    <BootstrapNavbar className="NavbarItems" bg="light" expand="lg">
      <Container fluid>
        <BootstrapNavbar.Brand className="navbar-logo">
          <h2>World-Aid</h2>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          className="fab fa-react"
          aria-controls="navbarScroll"
        />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Location</Nav.Link>
              <LinkContainer to="/">
                <Nav.Link>Causes</Nav.Link>
              </LinkContainer>
            </LinkContainer>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
