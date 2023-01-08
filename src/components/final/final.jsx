import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import "./style.css";

const Final = (props) => {
  return (
    <div>
      {props.score}

      <div className="main">
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
};

export default Final;

// export default function Final(){
//   return(
//     <div>
// <h1>score</h1>
//     <div className="main">
//     <Link to="/">Homepage</Link>
// </div>

//     </div>

//   )
// }
