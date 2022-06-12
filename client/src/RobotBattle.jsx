import RobotImage from "./RobotImage";
import { Button } from "react-bootstrap";
import { useState, useMemo } from "react";
import Scoreboard from "./Scoreboard";
import EndBattle from "./EndBattle";
import SendPost from "./SendPost";

export default function RobotBattle(props) {
  // team 1 & 2 index
  const [teamOneIndex, setTeamOneIndex] = useState(0);
  const [teamTwoIndex, seTeamTwoIndex] = useState(5);
  // give useState values for first battle
  // manage battle state
  const [battleState, setBattleState] = useState(true);
  // team points counter (start -1 because useEffect triggers on render)
  const [teamOnePoints, setTeamOnePoints] = useState(0);
  const [teamTwoPoints, setTeamTwoPoints] = useState(0);
  const [winningTeam, setWinningTeam] = useState('')
  // manage random choice variable
  const [randomNumber, setRandomNumber] = useState()
  // manage winning robot
  const [winningRobot, setWinningRobot] = useState('')
  // counter for index
  const handleRobotIndex = () => {
    if (teamOneIndex < 4){
      setTeamOneIndex((prevValue) => prevValue + 1)
      seTeamTwoIndex((prevValue) => prevValue + 1)
      // if true teamOne win, else false teamTwo
      setRandomNumber((Math.random() < 0.5))
      handleWinningRobot()
    } else {
      // change state before index out of range
      if (teamOnePoints > teamTwoPoints){
        setWinningTeam(props.teamOneName)
      } else setWinningTeam(props.teamTwoName)
    // post data to API
      setBattleState(false)
    }
  }

  const handleWinningRobot = useMemo(() => {
    if (props.robotData[teamOneIndex].outOfOrder === true) {
      console.log('Team One Robot Out of Order')
      setTeamTwoPoints((prevValue) => prevValue + 1)
      setWinningRobot(props.robotData[teamTwoIndex])
    } else if (props.robotData[teamTwoIndex].outOfOrder === true) {
        console.log('Team Two Robot Out of Order')
        setTeamOnePoints((prevValue) => prevValue + 1)
        setWinningRobot(props.robotData[teamOneIndex])
    } else {
      if (randomNumber){
        setTeamOnePoints((prevValue) => prevValue + 1)
        setWinningRobot(props.robotData[teamOneIndex])
      } else {
        setTeamTwoPoints((prevValue) => prevValue + 1)
        setWinningRobot(props.robotData[teamTwoIndex])

      }
    }
  }, [randomNumber, teamOneIndex, teamTwoIndex, props.robotData]);

  return (
    (battleState)?
  (
  <div>
  <SendPost winningRobot={winningRobot.id} teamOneRobot={props.robotData[teamOneIndex].id} teamTwoRobot={props.robotData[teamTwoIndex].id}/>
    <div className='scoreboard-container'>
        <Scoreboard teamOneName={props.teamOneName} teamTwoName={props.teamTwoName} teamOnePoints={teamOnePoints} teamTwoPoints={teamTwoPoints} round={teamOneIndex}/>
      </div>
    <div className='battle-container'>
      <div id='battle-right'>
        <RobotImage robots={props.robotData[teamOneIndex]} />
      </div>
      <div id='battle-middle'>
        <h3>The Winner is {winningRobot.name}!</h3>
        <Button
            className="btn-lg"
            id="robot-battle-button"
            type="button"
            onClick={() => {handleRobotIndex();}}
          >Continue</Button>
          </div>
          <div id='battle-left'>
            <RobotImage robots={props.robotData[teamTwoIndex]} />
          </div>
      </div>
    </div>):(
      <div className='endbattle-container'>
          <EndBattle winningTeam={winningTeam} robotData={props.robotData}/>
    </div>
  )
  );
}