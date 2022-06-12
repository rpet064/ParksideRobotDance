import { useEffect, useState } from 'react'
import axios from 'axios';
import { SpinnerRoundOutlined } from 'spinners-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LeaderboardImage from './LeaderboardImage';

export default function Leaderboard(){
  // control fetch of historical data of battles
   const [robotData, setRobotData] = useState([]);
   //  indv robot data (image, name etc.)
   const [robotAPI, setRobotApi] = useState([]);
  //  controls carousel/skeleton state
  const [loading, setLoading] = useState(true)

  //  prev danceoff data api
    const danceOffApi = axios.create({
        baseURL: 'https://challenge.parkside-interactive.com/api/danceoffs/'
      });
  // fetch robot json data array individually
    useEffect(() => {
      const arr2 = []
      let key = "winner"
      // fetch prev danceoff data
        danceOffApi.get('?_limit=10').then((response) => {
          const robotJSON = response.data
          // count total occurences each robot's wins
          robotJSON.forEach((x)=>{
            if(arr2.some((val)=>{ return val[key] === x[key] })){
              arr2.forEach((k)=>{
               if(k[key] === x[key]){
                  k["occurrence"]++
               }
             })
          //  if only one occurance
           } else {
             let a = {}
             a[key] = x[key]
              a["occurrence"] = 1
              arr2.push(a);
        }})
        // sort array based on occurence (lowest to highest)
        arr2.sort((a, b) => (a.occurrence > 	b.occurrence) ? 1 : -1)
        const reversedArr2 = arr2.reverse();
        setRobotData(reversedArr2);
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
        {(!loading)?
          <Swiper
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          slidesPerView={5}
          spaceBetween={10}
          className="mySwiper">
          {robotAPI.map((value, index) => (
            <SwiperSlide><LeaderboardImage RobotApi={value} key={index} ranking={index} wins={robotData}/></SwiperSlide>
          ))}
        </Swiper>:
        <SpinnerRoundOutlined size={150} color="rgba(172, 57, 57, 1)" />}
     </div>
      )
    }