import Axios from "axios";
import { useEffect, useState } from "react";

let randomNumber = Math.floor(Math.random() * 10);
let url =
  "https://challenge.parkside-interactive.com/api/robots/" + randomNumber;

export default function RobotImage() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await Axios(url);
    setComments(response.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  //  check use effect triggers
  useEffect(() => {
    console.log(comments);
  }, [comments]);
}
