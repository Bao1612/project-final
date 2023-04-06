import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import Phimmoi from "../Pages/Phimmoi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "../Component/Top.css";

function Top(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand className="me-4" to="/">
            PhimFly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-2">
              <Link
                className="m-2"
                to="/Phimle"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Phim Lẻ
              </Link>
              <Link
                className="m-2"
                to="/Phimhot"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Phim Hot
              </Link>
              <Link
                className="m-2"
                to="/Phimbo"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Phim Bộ
              </Link>
              <Link
                className="m-2"
                to="/Phimmoi"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Phim Mới
              </Link>
            </Nav>
            <div className="m-2">
              <div className="top-bar">
                <div className="search-container">
                  <input class="search" type="search" placeholder="Search..." />
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Top;
