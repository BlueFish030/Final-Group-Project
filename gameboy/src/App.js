import { useState } from "react";
import Menu from "./Menu";

setTimeout(()=>{
  const pressEffect = document.getElementById('pressEffect')
  window.addEventListener('keyup',()=>{
    pressEffect.className = ''
  })
  window.addEventListener('keydown',(e)=>{
    if(e.code==='KeyW'){
      pressEffect.classList.add('pressEffect-up')
    }else if(e.code==='KeyS'){
      pressEffect.classList.add('pressEffect-down')
    }else if(e.code==='KeyA'){
      pressEffect.classList.add('pressEffect-left')
    }else if(e.code==='KeyD'){
      pressEffect.classList.add('pressEffect-right')
    }
  })
},500)

function App() {

  return (
    <div className="App" id="app">
      <div className="line" id="line1"></div>
      <div className="line" id="line2"></div>
      <div className="line" id="line3"></div>
      <div className="darkBtnContainer" id="darkBtnC">
        <div className="dirBtn" id="topDownBtn"></div>
        <div className="dirBtn" id="rightLeftBtn"></div>
        <div id="pressEffect"></div>
      </div>
      <div className="redBtnContainer" id="redBtnc">
        <div className="baBtn" id="bBtn"><p>B</p></div>
        <div className="baBtn" id="aBtn"><p>A</p></div>
      </div>      
      <div className="longBtn" id="selectBtn">
        <p>SELECT</p>
      </div>
      <div className="longBtn" id="startBtn">
        <p>START</p>
      </div>      
      <div className="sec">
        <div className="power">
          <div>BATTERY</div>
        </div>
        <div className="container" id="screen">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
