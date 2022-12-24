import React from "react";
import {Link} from "react-router-dom";
import "./styles.css"
export default function Home() {
  return (
    <div className="home">
        <h1> Quizzical </h1>
        <h4>Some description if needed </h4>
        <Link to="/questions">Start Quiz</Link>
    </div>
  );
}