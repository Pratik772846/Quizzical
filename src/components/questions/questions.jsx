import React from "react";
import {Link} from "react-router-dom";
import "./style.css"
// import Format from "../utility/format.js";
import Format1 from "../utility/format1.js";

const Questions = (props)=>{
  console.log(props.data.results);
  
  const allquestions = props.data.results.map(x => x.question);
  console.log(allquestions);
  const alloptions = props.data.results.map(x=> [x.correct_answer,...x.incorrect_answers]);
  console.log(alloptions);
  const correct_option =props.data.results.map(x=> x.correct_answer);
  console.log(correct_option);
  // let ques =0;

//   const result = allquestions.reduce(function(arr, v, i) {
//     return arr.concat(v, alloptions[i]); 
//  }, []);
  // console.log(result);
  const [selected,setSelected] = React.useState(-1);

  var result = [];
  for (var i = 0; i < allquestions.length; i++) {
    result.push( <Format1
      quest = {allquestions[i]}
      alloptions = {alloptions[i]}
      correct_option = {correct_option[i]}
      score = {props.score}
      setScore = {props.setScore}
      selected = {selected}
      setSelected = {setSelected}
      />);
  }
  console.log(result);
  
  const final = result.map((x)=>{
    return(
      <h1>{x}</h1>
    )
  })
    return (
      <div>
        {final}
        <button > <Link to="/final">Check Answers</Link></button>
      </div>
           )
    //  return(
    //   <div className="main">
    //       <button > <Link to="/final">Check Answers</Link></button>
        
    // </div>
    //  )
}
export default Questions;

