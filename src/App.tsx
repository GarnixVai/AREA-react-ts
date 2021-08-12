import './App.scss';
import React, { useState } from "react";
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import { FaCog } from 'react-icons/fa';
import Score from "./components/Score";
import Game from "./components/Game";
import Play from "./components/Play";


function App() {
    // store choice
    const [userChoice, setUserChoice] = useState("");
    // store score
    const [score, setScore] = useState(0);
    // store mode
    const [mode, setMode] = useState(false);
  
  
    function handleMode(){
      setMode(!mode);
    }
  
  return (
    <div className="App">
      <div className="top-nav">
        <div className="mode" onClick={()=> handleMode()}>  
          <span><p><FaCog />{mode?"Auto":"Manual"}</p></span>
        </div>
        <Score score={score}/>
      </div>
      <div className="container">
        <div className="middle">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Play setUserChoice={setUserChoice}></Play>
                </Route>
                <Route path="/game">
                <Game mode={mode} userChoice={userChoice} score={score} setScore={setScore} />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>

       
      </div>
    </div>
  );
}

export default App;
