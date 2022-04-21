import { useState } from "react";
import { Button } from "react-bootstrap";
import Title from "./Title";
import SelectRobot from "./SelectRobot";

export default function ChooseNames() {
  const [teams, chooseTeams] = useState(false);

  function catchTeamNames(event: any){
    const teamNames = event.target.value;
     console.log(teamNames);

  }

  return !teams ? (
    <div>
      <Title bigTitle="Who's Competing Today?" />
      <form onSubmit="event.preventDefault()">
        <div>
          <h3> Team One </h3>
          <input type="text" name="nameOne" placeholder="CatBots" onSubmit={catchTeamNames}/>
        </div>
        <div>
          <h3> Team Two </h3>
          <input type="text" name="nameTwo" placeholder="DogBots" onSubmit={catchTeamNames} />
        </div>
        <Button
          className="form-button"
          type="submit"
          onClick={() => chooseTeams(true)}
        >
          Submit
        </Button>
      </form>
    </div>
  ) : (
    <div>
      <SelectRobot />
    </div>
  );
}
