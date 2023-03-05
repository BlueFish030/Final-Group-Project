import React from 'react'

export default function MuteVolume() {
  const handleClick = ()=>{
    const unMuteBtn = document.getElementById('unMuteBtn')
    const muteBtn = document.getElementById('muteBtn')
    const clickAudio = document.getElementById('clickAudio')
    const bgm = document.getElementById('bgm')
    if(unMuteBtn!==null){
      unMuteBtn.classList.remove('none')
      muteBtn.classList.add('none')
      bgm.volume = 0.05;
      clickAudio.volume = 0.05;
    }
  }
  return (
    <svg id="muteBtn" className='volBtn none' onClick={handleClick} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>volume-muted-glyph</title><path d="M256,93.07V418.93a23.27,23.27,0,0,1-37.81,18.17l-110-88H69.83A69.9,69.9,0,0,1,0,279.28V232.72A69.9,69.9,0,0,1,69.83,162.9h38.39l110-88A23.27,23.27,0,0,1,256,93.07ZM452,255.9l53.2-53.2a23.27,23.27,0,1,0-32.91-32.91L419,223l-53.44-53.33a23.28,23.28,0,1,0-32.89,33l53.41,53.29-53.39,53.38a23.27,23.27,0,1,0,32.91,32.91l53.42-53.42,52.86,52.75a23.28,23.28,0,0,0,32.89-33Z"/></svg>
  )
}
