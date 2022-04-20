import { useState } from "react";
import { Button } from "react-bootstrap";
import Title from "./Title";
import RobotBattle from "./RobotBattle";

export default function SelectRobot() {
  const [battle, beginBattle] = useState(false);

  return !battle ? (
    <div>
      <Title bigTitle="Here are your competitors!" />
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
