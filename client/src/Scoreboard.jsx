export default function Scoreboard(props){
    return(
        <div>
            <div className="scoreboard-left">
                <h1>Team {props.teamOneName} </h1>
                <h4>{props.teamOnePoints}</h4>
            </div>
            <div className="scoreboard-right">
                <h1>Team {props.teamTwoName} </h1>
                <h4>{props.teamTwoPoints}</h4>
            </div>
        </div>
    )
}