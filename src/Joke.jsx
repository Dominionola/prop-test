import { useState } from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  console.log(isShown);
  return (
    <>
      {props.setup && <p> {props.setup}</p>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>Show</button>
      <hr />
    </>
  );
}

if (false && console.log("Everthing  was true!")) {
  // console.log("Everthing  was true!")
}
