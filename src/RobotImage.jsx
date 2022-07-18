export default function RobotImage(props) {
    return (
            <div key={props.robots._id} className="robot-image" >
            <div>
               <img src={props.robots.avatar + '?size=160x160'} alt='' />
               <p>{props.robots.name}</p>
               <p>{props.robots.outOfOrder}</p>
            </div>
         </div>
      )
    }
