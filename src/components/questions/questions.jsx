import React from "react";
import {Link} from "react-router-dom";
import "./style.css"
import Format1 from "../utility/format1.js";
import axios from "axios";

const Questions = (props)=>{
  const URL = "http://opentdb.com/api.php?amount=6&category=19&difficulty=easy&type=multiple";
  const [data,setData] = React.useState({});
  const [loading,setLoading] = React.useState(true);
  const [selected,setSelected] = React.useState(-1);
  
  const getData = async () => {
    try{
      // setLoading(true);
    const response = await axios.get(URL);
    console.log(response);
    console.log(response.data);
    setData(response.data);
    setLoading(false);
  }
    catch(err){
      console.log(err);
    }
    
  };
  React.useEffect(() => {
      getData();
  }, []);

  console.log(loading);
  if(loading){
    return <p>Data is loading....</p>
  }
  

  // const [allquestionsdone, setAllquestionsdone] = React.useState(0);
  // console.log(data.results);
  
  const allquestions = data.results.map(x => x.question);
  console.log(allquestions);
  const alloptions = data.results.map(x=> [x.correct_answer,...x.incorrect_answers]);
  console.log(alloptions);
  const correct_option =data.results.map(x=> x.correct_answer);
  console.log(correct_option);

  

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
        <button > <Link to="/final">Check Answers</Link></button>
      </div>
           )
}
export default Questions;

