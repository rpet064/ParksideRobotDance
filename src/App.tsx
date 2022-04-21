import React, { useState } from "react";
import ChooseNames from "./ChooseNames";
import Title from "./Title";
import "../public/styles.css";
import Footer from "./Footer";
import RobotImage from "./RobotImage";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faHouseUser, faAddressCard);

export default function App() {
  // button toggle start competiton
  const [competition, setCompetiton] = useState(false);

  return (
    <div className="App">
      {/* navbar component */}
      <Navbar className="nav" expand="lg">
        <Container>
          <Button type="button" onClick={() => setCompetiton(false)}>
            PSRB
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" activeKey="/home">
              <Button type="button" onClick={() => setCompetiton(false)}>
                <FontAwesomeIcon icon={["fas", "house-user"]} />
              </Button>
              <Button type="button" href="#about">
                <FontAwesomeIcon icon={["fas", "address-card"]} />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* middle screen components */}
      {!competition && (
        <div>
          <Title
            bigTitle="Welcome to PS Robot Dance Battle"
            notBigTitle="Click the button to begin"
          />
          <Button className="btn-lg" onClick={() => setCompetiton(true)}>
            Begin Battle
          </Button>
          <div>
            <RobotImage />
            <RobotImage />
          </div>
        </div>
      )}
      {competition && <ChooseNames />}
      {/* footer component */}
      <Footer />
    </div>
  );
}
