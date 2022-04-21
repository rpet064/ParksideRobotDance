import { useState } from "react";
import { Button } from "react-bootstrap";
import Title from "./Title";
import RobotBattle from "./RobotBattle";

export default function SelectRobot(props: any) {
  // user confirm start of battle
  const [battle, beginBattle] = useState(false);

  return !battle ? (
    <div>
      <Title bigTitle="Here are your competitors!" />
      <div className="left-team">
        <h1>{props.teamName1}</h1>
      </div>
      <Button
        className="btn-lg"
        type="button"
        onClick={() => beginBattle(true)}
      >
        Begin!
      </Button>
    </div>
  ) : (
    <RobotBattle />
  );
}
