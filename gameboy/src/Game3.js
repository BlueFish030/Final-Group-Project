import "./Game3.css"
import React, { useEffect, useState } from "react";
import Stage1Picture from "./img/game01.gif";
import Stage2Picture from "./img/game02.gif";
import Stage3Picture from "./img/game03.gif";
import Stage4Picture from "./img/game04.gif";
import Stage5Picture from "./img/game05.gif";
import Lose from "./img/fortnite-dance5.gif";
const random = (array) => array.sort(() => 0.5 - Math.random());
var Q1 = random(["🢃", "🢁", "🢀", "🢂"]);
var Q2 = random(["🢃", "🢁", "🢀", "🢂", "🢀", "🢁"]);
var Q3 = random(["🢃", "🢁", "🢀", "🢂", "🢀", "🢃", "🢃", "🢁", "🢁"]);
var Q4 = random(["🢃", "🢁", "🢀", "🢂", "🢀", "🢃", "🢂", "🢀", "🢂", "🢀", "🢃", "🢂"]);
var Q5 = random(["🢃", "🢁", "🢀", "🢂", "🢀", "🢃", "🢂", "🢃", "🢃", "🢁", "🢀", "🢂", "🢀", "🢃", "🢂", "🢃", "🢃", "🢁",]);

function Game3() {
  const [score, setSorce] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(Q1)
  const [question, setQuestion] = useState(1)
  const [showPicture1, setshowPicture1] = useState(false)
  const [showPicture2, setshowPicture2] = useState(false)
  const [showPicture3, setshowPicture3] = useState(false)
  const [showPicture4, setshowPicture4] = useState(false)
  const [showPicture5, setshowPicture5] = useState(false)
  const [showLose, setshowLose] = useState(false)
  const [restartGame, setRestartGame] = useState(false)
  const [whatever,setWhatever] = useState(0)
  useEffect(() => {
    document.addEventListener('keyup', enter);
    return () => {
      document.removeEventListener('keyup', enter);
    }
  });
  useEffect(() => {
    if (question == 2) {
      document.removeEventListener('keyup', enter);
      document.addEventListener('keyup', stage2);
      return () => {
      document.removeEventListener('keyup', stage2);
      }
    }
    if (question == 3) {
      document.removeEventListener('keyup', enter);
      document.removeEventListener('keyup', stage2);
      document.addEventListener('keyup', stage3);
      return () => {
        document.removeEventListener('keyup', stage3);
      }
    }
    if (question == 4) {
      document.removeEventListener('keyup', enter);
      document.removeEventListener('keyup', stage2);
      document.removeEventListener('keyup', stage3);
      document.addEventListener('keyup', stage4);
      return () => {
        document.removeEventListener('keyup', stage4);
      }
    }
    if (question == 5) {
      document.removeEventListener('keyup', enter);
      document.removeEventListener('keyup', stage2);
      document.removeEventListener('keyup', stage3);
      document.removeEventListener('keyup', stage4);
      document.addEventListener('keyup', stage5);
      return () => {
       document.removeEventListener('keyup', stage5);
      }
    }
  });
  // const [counter, setCounter] = React.useState(10);
  // React.useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  // }, [counter]);
  //   useEffect(() => {
  //   if (question == 5) {
  //     document.addEventListener('keyup', stage5);
  //     return () => {
  //       document.removeEventListener('keyup', stage5);
  //     }
  //   }
  // });

  //stage 1
  function enter(event) {
    if (event.code === "KeyW" && Q1[0] === "🢁") {
      setSorce(score + 1);
    }
    else if (event.code === "KeyS" && Q1[0] === "🢃") {
      setSorce(score + 1);
    }
    else if (event.code === "KeyA" && Q1[0] === "🢀") {
      setSorce(score + 1);
    }
    else if (event.code === "KeyD" && Q1[0] === "🢂") {
      setSorce(score + 1);
    }
    currentQuestion.shift();
    setWhatever(prev => prev + 1)
    if (Q1.length === 0 && score >= 2) {
      Q1.push("٩(◦`꒳´◦)۶","Finish")
      setSorce(0)
      setCurrentQuestion(Q2)
      setQuestion(2);
      //setCounter(10);
      setshowPicture1(true);
    }
    else if (Q1.length == 0 && score <= 2) {
      Q1.push("٩(◦`꒳´◦)۶","Finish");
      setshowLose(true);
    }
  }

  //stage 2
  function stage2(e) {
    // console.log(currentQuestion)
    if (e.code === "KeyW" && currentQuestion[0] === "🢁") {
      setSorce(score + 1);
    }
    else if (e.code === "KeyS" && currentQuestion[0] === "🢃") {
      setSorce(score + 1);
    }
    else if (e.code === "KeyA" && currentQuestion[0] === "🢀") {
      setSorce(score + 1);
    }
    else if (e.code === "KeyD" && currentQuestion[0] === "🢂") {
      setSorce(score + 1);
    }
    currentQuestion.shift();
    setWhatever(prev => prev +1)
    if (Q2.length === 0 && score >= 4) {
      setshowPicture1(false);
      Q2.push("٩(◦`꒳´◦)۶","Finish")
      setshowPicture2(true);
      setSorce(0)
      setCurrentQuestion(Q3)
      setQuestion(3)
    } else if (Q2.length === 0 && score <= 3) {
      setshowPicture1(false);
      Q2.push("٩(◦`꒳´◦)۶","Finish")
      setshowLose(true);
    }
  }

  //stage 3
  function stage3(e) {
    if (e.code === "KeyW" && currentQuestion[0] === "🢁") {
      setSorce(score + 1);
      // console.log('right')
    }
    if (e.code === "KeyS" && currentQuestion[0] === "🢃") {
      setSorce(score + 1);
      // console.log('right')
    }
    if (e.code === "KeyA" && currentQuestion[0] === "🢀") {
      setSorce(score + 1);
      // console.log('right')
    }
    if (e.code === "KeyD" && currentQuestion[0] === "🢂") {
      setSorce(score + 1);
      // console.log('right')
    }
    currentQuestion.shift();
    setWhatever(prev => prev +1)
    if (Q3.length === 0 && score >= 2) {
        setshowPicture2(false)
      Q3.push("٩(◦`꒳´◦)۶","Finish")
      setSorce(0)
      setshowPicture3(true)
      setCurrentQuestion(Q4)
      setQuestion(4)
    } else if (Q3.length === 0 && score <= 2) {
        setshowPicture2(false)
      Q3.push("٩(◦`꒳´◦)۶","Finish")
      setshowLose(true);
    }
  }

  //stage 4
  function stage4(e) {
    if (e.code === "KeyW" && Q4[0] === "🢁") {
      setSorce(score + 1);
    }
    if (e.code === "KeyS" && Q4[0] === "🢃") {
      setSorce(score + 1);
    }
    if (e.code === "KeyA" && Q4[0] === "🢀") {
      setSorce(score + 1);
    }
    if (e.code === "KeyD" && Q4[0] === "🢂") {
      setSorce(score + 1);
    }
    currentQuestion.shift();
    setWhatever(prev => prev +1)
    if (Q4.length === 0 && score >= 10) {
        setshowPicture3(false)
      Q4.push("٩(◦`꒳´◦)۶","Finish")
      setSorce(0)
      setshowPicture4(true)
      setCurrentQuestion(Q5)
      setQuestion(5)
    } else if (Q4.length === 0 && score <= 9) {
        setshowPicture3(false)
      Q4.push("٩(◦`꒳´◦)۶","Finish")
      setshowLose(true);
    }
  }

  function stage5(e) {
    if (e.code === "KeyW" && Q5[0] === "🢁") {
      setSorce(score + 1);
    }
    if (e.code === "KeyS" && Q5[0] === "🢃") {
      setSorce(score + 1);
    }
    if (e.code === "KeyA" && Q5[0] === "🢀") {
      setSorce(score + 1);
    }
    if (e.code === "KeyD" && Q5[0] === "🢂") {
      setSorce(score + 1);
    }
    currentQuestion.shift();
    setWhatever(prev => prev +1)
    if (Q5.length === 0 && score >= 12) {
        setshowPicture4(false)
        setshowPicture5(true)
        Q5.push("٩(◦`꒳´◦)۶")
    } else if (Q5.length === 0 && score <= 10) {
        setshowPicture4(false)
      Q5.push("٩(◦`꒳´◦)۶")
      setshowLose(true);
    }
  }

  function restart(){
    Q1 = random(["🢃", "🢁", "🢀", "🢂"]);
    Q2 = random(["🢃", "🢁", "🢀", "🢂", "🢀", "🢁"]);
    Q3 = random(["🢃", "🢁", "🢀", "🢂", "🢀", "🢃", "🢃", "🢁", "🢁"]);
    Q4 = random(["🢃", "🢁", "🢀", "🢂", "🢀", "🢃", "🢂", "🢀", "🢂", "🢀", "🢃", "🢂"]);
    Q5 = (["🢃", "🢁", "🢀", "🢂", "🢀", "🢃", "🢂", "🢃", "🢃", "🢁", "🢀", "🢂", "🢀", "🢃", "🢂", "🢃", "🢃", "🢁",]);
  setSorce(0)
  setCurrentQuestion(Q1)
  setQuestion(1)
  setshowPicture1(false)
  setshowPicture2(false)
  setshowPicture3(false)
  setshowPicture4(false)
  setshowPicture5(false)
  setshowLose(false)
  setRestartGame(true)
  }
  function menu (){
    restart()
    const menu = document.getElementById('menu');
    const option = document.getElementById('option');
    const games = document.getElementById('games')
    const game3 = document.getElementById('g3Container');
    menu.classList.remove('none');
    option.classList.remove('none');
    games.classList.remove('none');
    game3.classList.add('none');
  }
  return (
    <main>
{/*       <div>
          <div className='timmer'>Countdown: {counter}</div>
      </div> */}
      <div>
      <p className="topside">Score:{score} Stage : {question}</p>
      <p >W=🢁  S=🢃  D=🢂 A=🢀</p>
      </div>
      <br />
      <div className='mainBorder' >
      {showPicture1 &&
        <>
          <p className="topside">Stage2 </p>
        <img className='picture' src={Stage1Picture} alt=''/>
        </>
      }
      {showPicture2 &&
        <>
          <p className="topside">Stage3 </p>
        <img className='picture' src={Stage2Picture} alt=''/>
        </>
      }
      {showPicture3 &&
        <>
          <p className="topside">Stage4 </p>
        <img className='picture' src={Stage3Picture} alt=''/>
        </>
      }
    {showPicture4 &&
        <>
          <p className="topside">Stage5 </p>
        <img className='picture' src={Stage4Picture} alt=''/>
        </>
      }
    {showPicture5 &&
        <>
          <p><strong>Win</strong> </p>
        <div className='restartBtn'onClick={restart} >Restart </div>
        <div className='restartBtn'onClick={menu} >Back to Menu </div>
        <img className='picture' src={Stage5Picture} alt=''/>
        </>
      }
      {showLose &&
        <div>
            <p><strong>You Lose</strong> </p>
        <div className='restartBtn'onClick={restart} >Press Restart </div>
        <div className='restartBtn'onClick={menu} >Back to Menu </div>
          <img className='losePicture' src={Lose} alt=''/>
        </div>
      }
      </div>
      <div className='showScore'>{currentQuestion}</div>
    </main>
  )
} export default Game3

