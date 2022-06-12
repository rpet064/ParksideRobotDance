import { useState, useEffect, useMemo} from "react";
import { Button } from "react-bootstrap";
import RobotBattle from "./RobotBattle";
import {Container} from "react-bootstrap";
import RobotImage from "./RobotImage"
import { SpinnerRoundOutlined } from 'spinners-react';


export default function SelectRobot(props) {
  // user confirm start of battle
  const [battle, beginBattle] = useState(false);
  //  catch robot data
  const [robotData,setRobotData]=useState([])
  // restful api robot url
  const [buttonUnclickable, setbuttonUnclickable] = useState(true)
  //  controls carousel/skeleton state
  const [loading, setLoading] = useState(true)
  var robotURL = [];
  while(robotURL.length < 11) {
      var r = Math.floor((Math.random() + 0.1) * 37);
      if(robotURL.indexOf(r) === -1) robotURL.push(r);
  }
    useEffect(() => {
      const robotPromises = robotURL.map(randNo =>
          fetch(`https://challenge.parkside-interactive.com/api/robots/${randNo}`)
              .then(res => res.json())
      );
      Promise.all(robotPromises).then(data =>
        {setRobotData(data)})
  }, [])

  useMemo(() => {
    if (robotData.length === 0){
      setbuttonUnclickable(true)
    } else {
      setbuttonUnclickable(false)
      setLoading(false)
    }
  }, [robotData])


  return !battle ? (
    <Container className="select-robots">
      <div>
       <h1> Here are your competitors! </h1>
      </div>
      <div id="select-robots-middle-container">
      <h3>Team {props.teamOneName}</h3>
      {(loading) && <SpinnerRoundOutlined size={60} color="rgba(172, 57, 57, 1)"/>}
      {/* render robot team one */}
         {robotData.slice(0, 5).map((value, ) => (
        <RobotImage robots={value}/>
      ))}
      </div>
      <h1> VS </h1>
      <div id="select-robots-bottom-container">
      {/* render robot team two */}
        <h3>Team {props.teamTwoName}</h3>
        {(loading) && <SpinnerRoundOutlined size={60} color="rgba(172, 105, 57, 1)"/>}
        {robotData.slice(-5).map((value, index) => (
        <RobotImage robots={value} key={index}/>
      ))}
      </div>
      <Button
        className="btn-lg"
        id="select-robots-button"
        type="button"
        onClick={() => beginBattle(true)}
        disabled={buttonUnclickable}
      >
        Begin!
      </Button>
      </Container>
  ) : (
    <RobotBattle robotData={robotData} teamOneName={props.teamOneName} teamTwoName={props.teamTwoName}/>
  );
}
