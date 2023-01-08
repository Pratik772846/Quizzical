import React from "react";
import './App.css';
import {Routes, Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from './components/homepage/homepage.jsx';
import Questions from "./components/questions/questions.jsx";
// import Questions from "./components/questions/Question.js";
import Final from "./components/final/final.jsx";
import axios from 'axios';



function App() {
  const [score, setScore] = React.useState(0);
  const URL = "http://opentdb.com/api.php?amount=6&category=19&difficulty=easy&type=multiple";
  const [data,setData] = React.useState({});

  React.useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data);
      // console.log(res.data);
      // console.log(res.data.results[0].question)
    });
  }, []);


  console.log(data);
  // const fetchQuestions = async () => {
  //   const { res } = await axios.get(
  //     URL
  //   );

  //   setData(res.results);
  //   console.log(res.results);
  // };

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/questions" element={<Questions score={score} setScore={setScore} questions={data} setQuestions ={setData}/>} /> */}
      <Route path="/questions" element={<Questions score={score} setScore={setScore} data={data} setData ={setData}/>} />
      {/* <Route path="/questions">
          <Questions score={score} setScore={setScore}/>
      </Route> */}
            
      <Route path ="/final" element={<Final score={score}/>} />
      {/* <Route path="/final">
            <Final  score={score} />
      </Route> */}
    </Routes>
    </>
      
    

  );
}

export default App;
