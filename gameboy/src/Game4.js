import React, { useState,useEffect } from "react";

export default function Game4() {
  const randomNum = Math.floor(Math.random() * 29 + 2);
  const [answer, setAnswer] = useState(randomNum);
  const [inputNum, setInputNum] = useState("");
  const [guessRange, setGuessRange] = useState([1, 30]);
  const [status, setStatus] = useState("  ");
  const [gameOver,setGameOver] = useState(false);

  const handleInput = (event) => {
    if (event.target.value !== "") {
      setInputNum(parseInt(event.target.value, 10));
    } else {
      setInputNum("");
    }
  };


  const handleChange = (event) => {
    if (status === "  ") {
      if (
        inputNum !== "" &&
        inputNum > guessRange[0] &&
        inputNum < guessRange[1]
      ) {
        if (inputNum > answer) {
          setGuessRange([guessRange[0], inputNum]);
          setInputNum("");
          return;
        }
        if (inputNum < answer) {
          setGuessRange([inputNum, guessRange[1]]);
          setInputNum("");
          return;
        }
        if (inputNum === answer) {
          setStatus("You Got It!!");
          setInputNum("");
          setGameOver(true);
          const g4h3 = document.getElementById('g4h3');
          const g4h5 = document.getElementById('g4h5');
          g4h3.classList.add('none');
          g4h5.classList.add('none');
          document.getElementById('inputNum').disabled = true;
          return;
        }
      }
    }

  };

  
  const resetState = () => {
    setInputNum("");
    setGuessRange([1, 30]);
    setStatus("  ");
    setAnswer(Math.floor(Math.random() * 29 + 2));
    setGameOver(false);
    const g4h3 = document.getElementById('g4h3');
    const g4h5 = document.getElementById('g4h5');
    g4h3.classList.remove('none');
    g4h5.classList.remove('none');
    document.getElementById('inputNum').disabled = false;
  };



  const handleRestart = ()=>{
    const menu  = document.getElementById('menu')
    const option = document.getElementById('option')
    const games = document.getElementById('games')
    const game4  = document.getElementById('g4Container')
    menu.classList.remove('none')
    option.classList.remove('none')
    games.classList.remove('none')
    game4.classList.add('none')
    setGameOver(false);
    resetState();
  }

  const handleKeyDown = (e)=>{
    if (e.code==='Enter') {handleChange()}
}


  return (
    <div className='Game4Container' id='g4Container'>
      <h1>Guess Number</h1>
          <h3 id="g4h1h3">{status}</h3>
        {status === "You Got It!!" && <h1 id="g4ans">{answer}</h1>}
      
        <h3 id="g4h3">RANGE : {guessRange[0]} - {guessRange[1]}</h3>
        
        <h5 id="g4h5">Guest a number:{/* {inputNum} */}</h5>
      
        <input id='inputNum' type="number" min="1" autoFocus max="30" value={inputNum} onChange={handleInput} 
        onKeyDown={handleKeyDown} />

        
      {/* <button onClick={handleChange}>ENTER</button>
      <button onClick={resetState}>RESTART</button> */}
      <div>
          <p className='enter' onClick={handleChange}>{/* ENTER */}</p>
          {/* <p className='restart' onClick={resetState}>RESTART</p> */}
      </div>
      {gameOver && <div className="g4EndBtns">
                        <div className='g4BackBtn' onClick={handleRestart}>Back</div>
                        <div className='restart' onClick={resetState}>RESTART</div>
                   </div>
      }
    </div>
  );
};
