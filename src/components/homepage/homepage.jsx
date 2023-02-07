import React from "react";
import {Link} from "react-router-dom";
// import "./styles.css"
export default function Home() {
  return (
    <div className=" grid h-screen place-items-center justify-center ">
      <div className="h-40 w-30">
          <h1 className="text-center text-3xl font-bold"> Quizzical </h1>
          <h4 className="text-center text-xl font-medium">Description </h4>
          <button className="bg-transparent hover:bg-white-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to="/questions" className="hover:bg-white-400 text-blue-700 text-2xl">Start Quiz</Link>
          </button>
      </div>


        {/* <button className=" bg-red-500 text-red-700">button</button> */}
    </div>
  );
}