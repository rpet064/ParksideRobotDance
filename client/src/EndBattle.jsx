import { Button } from "react-bootstrap";
import { useState } from "react";
import Leaderboard from "./Leaderboard";
import RobotImage from "./RobotImage";
import Confetti from 'react-confetti';

export default function EndBattle(props){
    const [endBattle, setEndBattle] = useState(true);
    return (
        (endBattle)?(
        <div className='endbattle-container'>
        <Confetti />
            <h2 className='endbattle-header'> The Winning Team is {props.winningTeam}, Congratulations!</h2>
            <div>
                {/* Render Winning Team */}
                    {props.robotData.slice(-5).map((value) => (
                    <RobotImage robots={value}/>
                ))}
            </div>
            <Button title='See the Historic Leaderboard' onClick={() => setEndBattle(false)}>Robot Leaderboard</Button>
            <Button title="About this app" id="address-card" type="button" >
                <a href="https://challenge.parkside-interactive.com/docs/">About</a>
            </Button>
        </div>
        ):(
        <div>
            <Leaderboard />
        </div>
    ))
}