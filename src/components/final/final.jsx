import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import "./style.css";

const Final = (props) => {
  function handleClick(){
    props.setScore(0);
  }
  return (
    <div>
      {props.score}

      <div className="main">
        <button onClick={handleClick}>
          <Link to="/">Restart Quiz</Link>
        </button>
        {/* <Link to="/">Homepage</Link> */}
      </div>
    </div>
  );
};

export default Final;
