import React from "react";
import './App.css';
import {Routes, Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from './components/homepage/homepage.jsx';
import Questions from "./components/questions/questions.jsx";
import Final from "./components/final/final.jsx";
import axios from 'axios';



function App() {
  const [score, setScore] = React.useState(0);
  // const URL = "http://opentdb.com/api.php?amount=6&category=19&difficulty=easy&type=multiple";
  // const [data,setData] = React.useState({message:"loading"});

  // const getData = async ()=>{
  //   axios.get(URL).then((res) => {
  //      setData(res.data);
  //   });
  // }

  // React.useEffect(() => {
  //    getData();
  // }, []);

  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/questions" element={<Questions score={score} setScore={setScore} data={data} setData ={setData}/>} />             */}
      <Route path="/questions" element={<Questions score={score} setScore={setScore} />} />
      <Route path ="/final" element={<Final score={score} setScore={setScore}/>} />
    </Routes>
    </>
      
    

  );
}

export default App;
