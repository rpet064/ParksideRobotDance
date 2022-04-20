import { useState } from "react";
import { Button } from "react-bootstrap";
import Title from "./Title";
import SelectRobot from "./SelectRobot";

export default function ChooseNames() {
  const [teams, chooseTeams] = useState(false);

  return !teams ? (
    <div>
      <Title bigTitle="Who's Competing Today?" />
      <form>
        <div>
          <h3> Team One </h3>
          <input type="text" name="nameOne" placeholder="CatBots" />
        </div>
        <div>
          <h3> Team Two </h3>
          <input type="text" name="nameTwo" placeholder="DogBots" />
        </div>
        <Button
          className="form-button"
          type="button"
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
