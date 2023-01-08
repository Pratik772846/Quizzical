import React from "react";

export default function Format1(props){


    const [active1,setActive1] = React.useState(false);
    const [active2,setActive2] = React.useState(false);
    const [active3,setActive3] = React.useState(false);
    const [active4,setActive4] = React.useState(false);
    const [active,setActive]= React.useState(false);
    const [index,setIndex] = React.useState(-1);
    
    function handleCheck(i){
        // const val = `props.alloptions[${i-1}]`;
        const val = props.alloptions[i-1];
        console.log(val);
        console.log(props.correct_option);
        if(val===props.correct_option){
            props.setScore(props.score+1);
        }
        console.log(props.score);
    }
    function handleClick1(){
        if(!active){
            setActive(prev=>!prev);
            setActive1(prev=>!prev);
            setIndex(1);
            handleCheck(1);
        }
    }
    function handleClick2(){
        if(!active){
            setActive(prev=>!prev);
            setActive2(prev=>!prev);
            setIndex(2);
            handleCheck(2);
        }
    }
    function handleClick3(){
        if(!active){
            setActive(prev=>!prev);
            setActive3(prev=>!prev);
            setIndex(3);
            handleCheck(3);
        }
    }
    function handleClick4(){
        if(!active){
            setActive(prev=>!prev);
            setActive4(prev=>!prev);
            setIndex(4);
            handleCheck(4);
        }
    }
    
      console.log(index);
    return(
        <div>
            {/* <h1>{props.quest}</h1>
            <p>{props.alloptions[0]}</p>
            <p>{props.alloptions[1]}</p>
            <p>{props.alloptions[2]}</p>
            <p>{props.alloptions[3]}</p> */}

            <div className="qanda">
          <h2 className="questions"><h1>{props.quest}</h1> </h2>
          <div className="option-div">
              <div className="options" > <button onClick={handleClick1} style={{ backgroundColor: active1 ? "#D6DBF5" : "#F5F7FB" }}><h3 style={{ backgroundColor: active1 ? "#D6DBF5" : "#F5F7FB" }}>{props.alloptions[0]}</h3></button> </div>
              <div className="options"> <button onClick={handleClick2} style={{ backgroundColor: active2 ? "#D6DBF5" : "#F5F7FB" }}><h3 style={{ backgroundColor: active2 ? "#D6DBF5" : "#F5F7FB" }}>{props.alloptions[1]}</h3> </button></div>
              <div className="options"><button onClick={handleClick3} style={{ backgroundColor: active3 ? "#D6DBF5" : "#F5F7FB" }}> <h3 style={{ backgroundColor: active3 ? "#D6DBF5" : "#F5F7FB" }}>{props.alloptions[2]}</h3> </button></div>
              <div className="options"><button onClick={handleClick4} style={{ backgroundColor: active4 ? "#D6DBF5" : "#F5F7FB" }}> <h3 style={{ backgroundColor: active4 ? "#D6DBF5" : "#F5F7FB" }}>{props.alloptions[3]}</h3> </button></div>
         </div>
        </div>
        </div>
        
        
    )
}


// return props.allquestions.map((x)=>{
    //             return(
    //                 <h1>{x}</h1>
    //             )       
    //         })