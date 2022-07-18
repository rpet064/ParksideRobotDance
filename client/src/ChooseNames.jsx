import { useState } from "react";
import { Button } from "react-bootstrap";
import SelectRobot from "./SelectRobot";

export default function ChooseNames() {

  const [teams, chooseTeams] = useState(false);

  const [values, setValues] = useState({
    teamOneName: "",
    teamTwoName: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log("updated2")
  };

  return !teams ? (
    <div className='team-names-form'>
      <h1> Who's Competiting Today? </h1>
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
            name="teamOneName"
            placeholder="CatBots"
            onChange={handleInputChange}
            value={values.teamOneName}
            required
          />
        </div>
        <div>
          <h3> Team Two </h3>
          <input
            type="text"
            name="teamTwoName"
            placeholder="DogBots"
            onChange={handleInputChange}
            value={values.teamTwoName}
            required
          />
        </div>
        <Button 
        className="form-button" 
        type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  ) : (
    <div>
      <SelectRobot teamOneName={values.teamOneName} teamTwoName={values.teamTwoName} />
    </div>
  );
}
  