import { useState } from "react";
import { Button } from "react-bootstrap";
import Title from "./Title";
import SelectRobot from "./SelectRobot";

// catch teamname input values
const teamNames = {
  teamName1: "",
  teamName2: ""
};

export default function ChooseNames() {
  const [teams, chooseTeams] = useState(false);

  const [values, setValues] = useState(teamNames);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return !teams ? (
    <div>
      <Title bigTitle="Who's Competing Today?" />
      <form
        onSubmit={(event) => {
          chooseTeams(true);
          event.preventDefault();
        }}
      >
        <div>
          <h3> Team One </h3>
          <input
            type="text"
            name="teamName1"
            placeholder="CatBots"
            onChange={handleInputChange}
            value={values.teamName1}
          />
        </div>
        <div>
          <h3> Team Two </h3>
          <input
            type="text"
            name="teamName2"
            placeholder="DogBots"
            onChange={handleInputChange}
            value={values.teamName2}
          />
        </div>
        <Button className="form-button" type="submit">
          Submit
        </Button>
      </form>
    </div>
  ) : (
    <div>
      <SelectRobot {...teamNames} />
    </div>
  );
}
