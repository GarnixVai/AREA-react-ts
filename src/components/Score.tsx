import React from "react";
import "../styles/score.scss";

interface ScoreProps {
    score: any;
}
  
const Score: React.FC<ScoreProps> = ({score}) => {
    return (
        <div className="score">
            <h1>Score: {score}</h1>
        </div>
    )
}
export default Score;