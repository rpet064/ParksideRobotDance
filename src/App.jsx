import React, { useState, useEffect } from "react";
import ChooseNames from "./ChooseNames";
import Footer from "./Footer";
import axios from 'axios'
import Leaderboard from "./Leaderboard";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faAddressCard, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faHouseUser, faAddressCard, faTrophy);

export default function App() {
  // navigate to about page
  // button toggle start competiton
  const [competition, setCompetiton] = useState(false);
  // store api data
  const [robot, setRobot] = useState([]);
  const [robot2, setRobot2] = useState([]);
  const [leaderboard, setLeaderboard] = useState(false);
  const robotApi = axios.create({
    baseURL: "https://challenge.parkside-interactive.com/api/robots/" + Math.floor((Math.random() + 0.1) * 37)
  });
  const robotApi2 = axios.create({
    baseURL: "https://challenge.parkside-interactive.com/api/robots/" + Math.floor((Math.random() + 0.1) * 37)
  });

  const navigateHome = () => {
    setCompetiton(false)
    setLeaderboard(false)
  }

   useEffect(() => {
    robotApi.get('?_limit=10').then((response) => {
        setRobot(response.data);
      });
   }, []);

   useEffect(() => {
    robotApi2.get('?_limit=10').then((response) => {
        setRobot2(response.data);
      });
   }, []);

  return (
    <div className="App">
      {/* navbar component */}
      <Navbar className="nav" expand="lg">
        <Container>
          <Button title="Home" type="button" onClick={() => navigateHome()}>
            PSRB
          </Button>
            <Nav className="ms-auto" activeKey="/home">
            <div className='btn-group'>
              <div>
                  <Button title="About this app" id="address-card" type="button" >
                    <a href="https://challenge.parkside-interactive.com/docs/">
                      <FontAwesomeIcon icon={["fas", "address-card"]} />
                    </a>
                  </Button>
                </div>
                <div>
                  <Button title="Home" type="button" onClick={() => navigateHome()}>
                    <FontAwesomeIcon icon={["fas", "house-user"]} />
                  </Button>
                </div>
                {(!competition) && (
                <div>
                  <Button title="Leaderboard" type="button" onClick={() => setLeaderboard(true)}>
                    <FontAwesomeIcon icon={["fas", "trophy"]} />
                  </Button>
                </div>
                )}
              </div>
            </Nav>
        </Container>
      </Navbar>
      {/* middle screen components */}
      {leaderboard? <Leaderboard />: 
      (!competition) && (
         <Container className="homepage">
         <div id="homepage-left">
         <h4>{robot.name}</h4>
            <div>
              <img src={robot.avatar + '?size=160x160'} alt="Robot should be here"></img>
              <p>
              <span>Dance Move:</span>
              <span>{robot.powermove}</span>
              </p>
            </div>
          </div>
          <div id="homepage-middle">
            <div>
              <h2>Welcome to PS Robot Dance Battle</h2>
            </div>
            <div className="homepage-button">
              <Button className="btn-lg" onClick={() => setCompetiton(true)}>
                Begin Battle
              </Button>
            </div>
        </div>
        <div id="homepage-right">
            <h4>{robot2.name}</h4>
            <div>
              <img src={robot2.avatar + '?size=160x160'} alt="Robot should be here"></img>
              <p>
              <span>Dance Move:</span>
              <span>{robot2.powermove}</span>
              </p>
            </div>
        </div>
      </Container>
      )}
      {competition && (<div className="homepage-middle"><ChooseNames /></div>)}
      {/* footer component */}
      <Footer />
    </div>
  );
}
