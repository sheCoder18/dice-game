import React, {useState} from "react";
import TotalScore from "./TotalScore";
import NumberSelect from "./NumberSelect";
import RoleDice from "./RoleDice";
import styled from "styled-components";
import {Button, OutlineButton} from "../styled/Button"
import Rules from "./Rules";

function GamePlay()
{
  const [score,setScore] = useState(0);
  const[selectedNumber, setSelectedNumber]=useState();
  const[currentDice, setCurrentDice]= useState(1);
  const[error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  
  const generateRandomNumber =(min,max)=>{
  return Math.floor(Math.random()*(max-min)+min);
};

function changeDice()
{
  if(!selectedNumber) {
    setError("You have not selected any number")
    return;
  }
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice(randomNumber);
    if(selectedNumber===randomNumber)
    {
      setScore((prev) => prev+ randomNumber);
    }else {
      setScore((prev) => prev-2);
    }
    setSelectedNumber(undefined);
}
function resetScore()
{
  setScore(0);
}
function handleRules()
{
  return setShowRules((prev)=>!prev)
}


    return (
        <MainContainer>
            <div className ="top_section">
            <TotalScore score= {score}/>
            <NumberSelect 
            error= {error}
            setError= {setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice
            currentDice={currentDice}
            changeDice={changeDice}/>
            <div className= "btns">
               <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
              <Button 
              onClick={handleRules}>
                {showRules ? "Hide": "Show"}</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    )
}
export default GamePlay;


const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;