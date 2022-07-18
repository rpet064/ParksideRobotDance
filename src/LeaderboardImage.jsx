import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCrown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faStar, faCrown);



export default function LeaderboardImage(props) {
    function StarGenerator(numStars, className_){
        return(
        [...Array(numStars)].map((index) => (
               <FontAwesomeIcon className={className_} icon={["fas", "star"]} key={index} />
        )))
    }
    return (
            <div key={props.key} id="robot-image">
                <div>
               <img src={props.RobotApi.avatar + '?size=160x160'} alt='' />
               <p>{props.RobotApi.name}</p>
               <p className='powermove-p'>Dance Move: {props.RobotApi.powermove}</p>
               {(() => {
                    switch (Math.ceil(props.ranking / 5)) {
                    case 0: return <FontAwesomeIcon icon={["fas", "crown"]} />
                    case 1:  return StarGenerator(5, 'fa-star');
                    case 2: return StarGenerator(4, 'four-stars');
                    case 3: return StarGenerator(3, 'three-stars');
                    case 4:  return StarGenerator(2, 'two-stars');
                    default: return StarGenerator(1, 'one-stars');
                    }
                })()}
               <p className='wins-p'>Wins:{props.wins[props.ranking]['occurrence']}</p>
            </div>
         </div>
      )
    }