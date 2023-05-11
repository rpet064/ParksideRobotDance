import styles from '../styles/Home.module.css'

export default function Scoreboard(props:any){
    return(
        <div>
            <div className={styles.scoreboardleft}>
                <h1>Team {props.teamOneName} </h1>
                <h4>{props.teamOnePoints}</h4>
            </div>
            <div className={styles.scoreboardright}>
                <h1>Team {props.teamTwoName} </h1>
                <h4>{props.teamTwoPoints}</h4>
            </div>
        </div>
    )
}