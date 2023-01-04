import { useMemo } from 'react';

export default function SendPost(props){
    const postURL = 'https://challenge.parkside-interactive.com/api/danceoffs'
    useMemo(() => {
        const data =  {
            "danceoffs" : [
            {
            "winner": props.winningRobot,
            "opponents": [props.teamOneRobot, props.teamTwoRobot]
          }]}
          console.log(data);
          fetch(postURL, {
            method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "danceoffs" : [
                {
                "winner": props.winningRobot,
                "opponents": [props.teamOneRobot, props.teamTwoRobot]
              }]}
              )
            })
    }, [props.robotOne, props.robotTwo, props.winningRobot])
    return (
        <div>
        {console.log('Post Sent')}
        </div>
    )
}