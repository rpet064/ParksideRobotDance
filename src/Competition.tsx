import { useState } from "react";
import { Button } from "react-bootstrap";
import Title from "./Title";

export default function Competition() {
  const [state, setState] = useState({
    nameOne: "",
    nameTwo: ""
  });

  function handleChange(evt: any) {
    const value = evt.target.value;
    console.log(value);
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <div>
      <Title bigTitle="Who's Competing Today?" />
      <form onSubmit={this.handleSubmit}>
        <h3> Team One </h3>
        <input
          onChange={handleChange}
          type="text"
          name="nameOne"
          value={state.nameOne}
          placeholder="CatBots"
        />
        <h3> Team Two </h3>
        <input
          onChange={handleChange}
          type="text"
          name="nameTwo"
          value={state.nameTwo}
          placeholder="DogBots"
        />
        <Button type="submit" onClick={() => preventDefault()}>
          Submit
        </Button>
      </form>
    </div>
  );
}
