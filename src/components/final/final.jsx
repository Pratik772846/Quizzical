import React from "react";
import {Link} from "react-router-dom";
import "./style.css"
import Format from "../utility/format.js";
export default function Final() {
  return (
   

      <div className="que" >
      <Format 
      que="Which is the hottest planet in our solar system ?"
      option1={{
        value:"earth",
        clicked:"false"
      }}
      option2={{
        value:"mars",
        clicked:"false"
      }}
      option3={{
        value:"venus",
        clicked:"false"
      }}
      option4={{
        value:"saturn",
        clicked:"false"
      }}
      correct="earth"
      />


 
  <div className="main">
  <Link to="/">Homepage</Link>
  </div>
  
</div>
  );
}