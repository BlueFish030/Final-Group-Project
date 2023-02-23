import { useState } from "react";
import Menu from "./Menu";

function App() {

  return (
    <div className="App">
      <div className="line" id="line1"></div>
      <div className="line" id="line2"></div>
      <div className="line" id="line3"></div>
      <div className="barkBtnContainer">
        <div className="dirBtn" id="topDownBtn"></div>
        <div className="dirBtn" id="rightLeftBtn"></div>
      </div>
      <div className="redBtnContainer">
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
        <div className="container">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
