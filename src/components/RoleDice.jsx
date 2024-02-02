import React, {useState} from "react";
import styled from "styled-components";

function RoleDice({currentDice, changeDice})
{

    return (
        <DiceContainer>
            <div className= "dice" onClick={changeDice}>
            <img src=
            {`/images/dice_${currentDice}.png`} alt={`dice_${currentDice}`}/>
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )

}
export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;