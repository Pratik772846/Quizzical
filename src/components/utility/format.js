import React from "react";

export default function Format(props){

    const [active1,setActive1] = React.useState(false);
    const [active2,setActive2] = React.useState(false);
    const [active3,setActive3] = React.useState(false);
    const [active4,setActive4] = React.useState(false);
    function handleClick1(){
        if(!active2 && !active3 && !active4)
            setActive1(!active1);
    }
    function handleClick2(){
        if(!active1 && !active3 && !active4)
            setActive2(!active2);
      }
      function handleClick3(){
        if(!active1 && !active2 && !active4)
            setActive3(!active3);
      }
      function handleClick4(){
        if(!active1 && !active2 && !active3)
            setActive4(!active4);
      }

    return(
        <div className="qanda">
          <h2 className="questions"><h1>{props.que}</h1> </h2>
          <div className="option-div">
              <div className="options" > <button onClick={handleClick1} style={{ backgroundColor: active1 ? "#D6DBF5" : "#F5F7FB" }}><h3 style={{ backgroundColor: active1 ? "#D6DBF5" : "#F5F7FB" }}>{props.option1.value}</h3></button> </div>
              <div className="options"> <button onClick={handleClick2} style={{ backgroundColor: active2 ? "#D6DBF5" : "#F5F7FB" }}><h3 style={{ backgroundColor: active2 ? "#D6DBF5" : "#F5F7FB" }}>{props.option2.value}</h3> </button></div>
              <div className="options"><button onClick={handleClick3} style={{ backgroundColor: active3 ? "#D6DBF5" : "#F5F7FB" }}> <h3 style={{ backgroundColor: active3 ? "#D6DBF5" : "#F5F7FB" }}>{props.option3.value}</h3> </button></div>
              <div className="options"><button onClick={handleClick4} style={{ backgroundColor: active4 ? "#D6DBF5" : "#F5F7FB" }}> <h3 style={{ backgroundColor: active4 ? "#D6DBF5" : "#F5F7FB" }}>{props.option4.value}</h3> </button></div>
         </div>
        </div>
    )
}