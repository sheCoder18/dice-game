import React, {useState} from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay"

function App() {
  const[isGameStarted, setisGameStarted]= useState(false)

  function handleChange()
  {
    setisGameStarted(prev =>
      {
        return !prev;
      })
  }

  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame toggle= {handleChange}/>}
    </>
  )
}

export default App

