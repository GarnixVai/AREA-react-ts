import React from "react";
import { Link } from "react-router-dom";
import {FaHandScissors, FaHandPaper, FaHandRock} from "react-icons/fa";
import "../styles/play.scss";
interface PlayProps {
    setUserChoice: any;
}
  
const Play: React.FC<PlayProps> = ({setUserChoice}) => {
    const iconSize = 32;
    const setChoice = (e: any)=>{
        setUserChoice(e);
        console.log("e", e);
    };
    return (
        <div className="play">
            <span><h3>You could move now:</h3></span>
            <div>
                <Link to="/game">
                    <div 
                        data-id="paper"
                        onClick={()=>{setChoice("paper")}}
                        className="icon icon--paper">
                        <span><FaHandPaper size={iconSize}/></span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/game">
                    <div 
                        data-id="scissors"
                        onClick={()=>setChoice("scissors")}
                        className="icon icon--Scissors">
                            <span><FaHandScissors size={iconSize}/></span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/game">
                    <div 
                        data-id="rock"
                        onClick={()=>setChoice("rock")}
                        className="icon icon--Rock">
                        <span><FaHandRock size={iconSize}/></span>
                    </div>
                </Link>
            </div>
        </div>
)
}


export default Play;