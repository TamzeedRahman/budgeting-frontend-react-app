import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="light">
      <h1>Budgeting App</h1>

      <Nav>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/">
            <h2>All Transactions</h2>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/transaction">
            <h2>Add Transaction</h2>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
