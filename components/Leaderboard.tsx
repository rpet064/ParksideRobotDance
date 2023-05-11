import { useEffect, useState } from 'react'
import axios from 'axios';
import { SpinnerRoundOutlined } from 'spinners-react';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../styles/Home.module.css'
import "swiper/css";
import "swiper/css/pagination";
import LeaderboardImage from './LeaderboardImage';

export default function Leaderboard(){

  const [domLoaded, setDomLoaded] = useState(false);
  
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // control fetch of historical data of battles
  const [robotData, setRobotData] = useState([{"winner": String, "occurrence": Number}]);
  
  //  indv robot data (image, name etc.)
  const [robotAPI, setRobotApi] = useState([[{
    "id": Number,
    "name": String,
    "powermove": String,
    "experience": Number,
    "outOfOrder": Boolean,
    "avatar": String
}]]);
  
  //  controls carousel/skeleton state
  const [loading, setLoading] = useState(true)

  //  prev danceoff data api
    const danceOffApi = axios.create({
        baseURL: 'https://challenge.parkside-interactive.com/api/danceoffs/'
      });
  
      // fetch robot json data array individually
    useEffect(() => {
      let robotWins: Array<any> = [{
          "id": Number,
          "name": String,
          "powermove": String,
          "experience": Number,
          "outOfOrder": Boolean,
          "avatar": String
}]
      
      // fetch prev danceoff data
        danceOffApi.get('?_limit=10').then((response) => {
          const robotJSON = response.data
          
          // count total occurences each robot's wins
          robotJSON.forEach((robot: any)=>{
            if(robotWins.some((val)=>{ return val["winner"] === robot["winner"] })){
              robotWins.forEach((k)=>{
               if(k["winner"] === robot["winner"]){
                  k["occurrence"]++
               }
               console.log(robotJSON)
             })
          
             //  if robot only has one win - add to robotOnlyOneWin object, assign robot's name
            //  and set occurrence to one - then push into main array of robots
           } else {
             let onlyOneWinRobot = {"winner": "", "occurrence": 0}
              onlyOneWinRobot["winner"] = robot["winner"]
              onlyOneWinRobot["occurrence"] = 1
              robotWins.push(onlyOneWinRobot);
        }
      })

        // sort array based on occurence (lowest to highest)
        robotWins.sort((a, b) => (a.occurrence > 	b.occurrence) ? 1 : -1)
        robotWins = robotWins.reverse();
        setRobotData(robotWins);
        setLoading(false);
      })
    },[]);

    // fetch api then reverse order (highest to lowest occurences)
    useEffect(() => {
      const robotPromises = robotData.slice(0).map(robot =>
          fetch(`https://challenge.parkside-interactive.com/api/robots/${robot.winner}`)
              .then(res => res.json())
      );
      Promise.all(robotPromises).then(data =>
        {setRobotApi(data)})
  }, [robotData])

    return(
      <div id="leaderboard">
      <h1>PSRB Robot Hall of Fame</h1>
        {(!loading && domLoaded)?
          <Swiper
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          slidesPerView={5}
          spaceBetween={10}
          className={styles.mySwiper}>
          {robotAPI.map((value, index) => (
            <SwiperSlide><LeaderboardImage RobotApi={value} key={index} ranking={index} wins={robotData}/></SwiperSlide>
          ))}
        </Swiper>:
        <SpinnerRoundOutlined size={150} color="rgba(172, 57, 57, 1)" />}
     </div>
      )
    }