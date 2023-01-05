import RobotImage from "./RobotImage";
import { Button } from "react-bootstrap";
import { useState, useMemo } from "react";
import Scoreboard from "./Scoreboard";
import EndBattle from "./EndBattle";
import SendPost from "./SendPost";

export default function RobotBattle(props:any) {

  // team 1 & 2 data
  const [teamOneIndex, setTeamOneIndex] = useState(0);
  const [teamTwoIndex, seTeamTwoIndex] = useState(5);

  // when changed to false - end battle
  const [battleState, setBattleState] = useState(true);
  
  // team points counter (start -1 because useEffect triggers on render)
  const [teamOnePoints, setTeamOnePoints] = useState(0);
  const [teamTwoPoints, setTeamTwoPoints] = useState(0);
  const [winningTeam, setWinningTeam] = useState({"id": Number, "name": String})

  // manage winning robot
  const [winningRobot, setWinningRobot] = useState({"id": Number, "name": String})

  const handleWinningRobot = useMemo(() => {
    if (props.robotData[teamOneIndex].outOfOrder === true) {
      setTeamTwoPoints((prevValue) => prevValue + 1)
      setWinningRobot(props.robotData[teamTwoIndex])

    } else if (props.robotData[teamTwoIndex].outOfOrder === true) {
        setTeamOnePoints((prevValue) => prevValue + 1)
        setWinningRobot(props.robotData[teamOneIndex])

    // if the random number is smaller than 0.5 then team one wins, else team two wins
    // the challenge requires that the winner is chosen randomly
    } else {
      if (Math.random() < 0.5){
        setTeamOnePoints((prevValue) => prevValue + 1)
        setWinningRobot(props.robotData[teamOneIndex])
      } else {
        setTeamTwoPoints((prevValue) => prevValue + 1)
        setWinningRobot(props.robotData[teamTwoIndex])

      }
    }
  }, [teamOneIndex, teamTwoIndex, props.robotData]);

  // counter for index
  const handleRobotIndex = () => {
    if (teamOneIndex < 4){
      setTeamOneIndex((prevValue) => prevValue + 1)
      seTeamTwoIndex((prevValue) => prevValue + 1)
    } else {

      // change state before index out of range
      if (teamOnePoints > teamTwoPoints){
        setWinningTeam(props.teamOneName)
      } else setWinningTeam(props.teamTwoName)

    // post data to API
      setBattleState(false)
    }
  }

  return (
    (battleState)?
  (
  <div>

    <div className='scoreboard-container'>
        <Scoreboard teamOneName={props.teamOneName} teamTwoName={props.teamTwoName} teamOnePoints={teamOnePoints} teamTwoPoints={teamTwoPoints} round={teamOneIndex}/>
        <SendPost winningRobot={winningRobot.id} teamOneRobot={props.robotData[teamOneIndex].id} teamTwoRobot={props.robotData[teamTwoIndex].id}/>
      </div>

    <div className='battle-container'>

      <div id='battle-right'>
        <RobotImage robots={props.robotData[teamOneIndex]} />
      </div>

      <div id='battle-middle'>
        {/* Bug below "fixed" by wrapping child elements with empty fragements */}
        <>
          The Winner is {winningRobot.name}!
        </>
        <>
         <Button
            className="btn-lg"
            id="robot-battle-button"
            type="button"
            onClick={() => {handleRobotIndex()}}
          >Continue</Button>
        </>
      </div>

          <div id='battle-left'>
            <RobotImage robots={props.robotData[teamTwoIndex]} />
          </div>
      </div>
    </div>
    ) :
    
    (
      <div className='endbattle-container'>
          <EndBattle winningTeam={winningTeam} robotData={props.robotData}/>
    </div>
  )
  );
}