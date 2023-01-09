import React from "react";
import {Link} from "react-router-dom";
import "./style.css"
import Format1 from "../utility/format1.js";

const Questions = (props)=>{

  // const [allquestionsdone, setAllquestionsdone] = React.useState(0);
  console.log(props.data.results);
  
  const allquestions = props.data.results.map(x => x.question);
  console.log(allquestions);
  const alloptions = props.data.results.map(x=> [x.correct_answer,...x.incorrect_answers]);
  console.log(alloptions);
  const correct_option =props.data.results.map(x=> x.correct_answer);
  console.log(correct_option);

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
      // allquestionsdone = {allquestionsdone}
      // setAllquetionsdone = {setAllquestionsdone}
      />);
  }

  console.log(result);
  
  const final = result.map((x)=>{
    return(
      <h1>{x}</h1>
    )
  })


    // function Check(){
    //   if(allquestionsdone===allquestions.length){
    //     return (<button > <Link to="/final">Check Answers</Link></button>);
    //   }
    // }
    
    
    return (
      <div>
        {final}
        {/* <Check/> */}
        <button > <Link to="/final">Check Answers</Link></button>
      </div>
           )
}
export default Questions;

