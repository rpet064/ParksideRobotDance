import "../public/styles.css";
import Footer from "./Footer";
import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Title from "./Title";
import Competition from "./Competition";

export default function App() {
  // button toggle start competiton
  const [competition, setCompetiton] = useState(false);
  return (
    <div className="App">
      {/* navbar component */}
      <Navbar className="nav" expand="lg">
        <Container>
          <Button href="#home">React-Bootstrap</Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" activeKey="/home">
              <Button>Home</Button>
              <Button>Link</Button>
              <Button href="#about">About</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* middle screen components */}
      <Title />
      {!competition && (
        <Button className="btn-lg" onClick={() => setCompetiton(true)}>
          Begin Battle
        </Button>
      )}
      {competition && <Competition />}
      {/* footer component */}
      <Footer />
    </div>
  );
}
