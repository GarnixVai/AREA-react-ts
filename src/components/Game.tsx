import React, { useEffect, useState } from "react";
import { Link, BrowserRouter, withRouter, useHistory } from "react-router-dom";
import { FaRedo } from "react-icons/fa";
import "../styles/game.scss";

interface GameProps {
  mode?: Boolean;
  score?: Number;
  userChoice?: any;
  setScore?: any;
}


const Game: React.FC<GameProps> = ({ mode, score, userChoice, setScore }) => {
  const choices = ["rock", "paper", "scissors"];
  const iconSize = 32;
  //robot1
  const [house, setHouse] = useState("");
  const [player, setPlayer] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  // In typescript, this could be done by enum
  const MapDict: any = {
    scissors: 1,
    paper: 3,
    rock: 7,
  };
  // Game rule
  const ruleDict: any = {
    //  scissors(1), paper(3) ==> scissors(1) win
    //  paper(3) , rock(7)  ==> paper(3) win
    //  scissors(1), rock(7) ==> rock(7) win
    // 2, 6, 14==> draw
    4: "scissors",
    10: "paper",
    8: "rock",
  };



  const newHousePick = () => {
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  const history = useHistory();
  const handleNavigate = (path: string) => history.push(path);

  useEffect(() => {
    newHousePick();
    setPlayer(userChoice);
  }, [userChoice]);

  function gameRule(player1: any, player2: any) {
    const sumValue = MapDict[player1] + MapDict[player2];
    if (!sumValue) {
      return;
    } else {
      if (!(sumValue in ruleDict)) return ["draw", 0];
      const result = ruleDict[sumValue];
      return result === player1 ? ["win", 1] : ["lose", -1];
    }
  }

  function newPlay() {
    setPlayer(choices[Math.floor(Math.random() * 3)])
    setHouse(choices[Math.floor(Math.random() * 3)]);
  }

  const Result = () => {
    const res: any = gameRule(player, house);
    if (res) {
      setPlayerWin(res[0]);
      setScore(score + res[1]);
    }
  };

  useEffect(() => {
    Result();
  }, [house, player]);

  return (
    <div className="game">
      <div className="info"><pre>
        {mode ? "Player1(You) " : "Your Choice"}:{player} <br />
        {mode ? "Player2 " : "Robot"}:{house} <br /></pre></div>
      <h2>You {playerWin}</h2>

      {mode ? (<BrowserRouter><Link to="/game" onClick={() => newPlay()}>
        <div className="icon"><FaRedo size={iconSize} /></div>
      </Link></BrowserRouter>) : (
        <div onClick={()=>handleNavigate('/')}>
          <div className="icon"><FaRedo size={iconSize} /></div>
        </div>
        )}
    </div>
  );
};

export default Game;
