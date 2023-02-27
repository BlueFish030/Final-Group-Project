import React from 'react'
import { useState , useEffect } from 'react'
import BasketHoop from './BasketHoop'
import BasketBall from './BasketBall'
import GameOverAni from './GameOverAni'

export default function Game1() {
  const [score,setScore] = useState(0);
  const [life,setLife] = useState(3);
  const [ableShoot,setAbleShoot] = useState(true);
  const [gameOver,setGameOver] = useState(false);

  useEffect(()=>{
    window.addEventListener('keyup', handleShoot);
  },[])

  

  useEffect(()=>{
    if(life<=0){
      setGameOver(true);
    }
  })

  const handleShoot = (e)=>{
    const ball = document.getElementById('ball').firstChild;
    const hoop = document.getElementById('hoop').firstChild;
    const health = document.getElementById('health');
    const hoopTransform = window.getComputedStyle(hoop);
    const hoopMatrix = new DOMMatrixReadOnly(hoopTransform.transform)
    let maxMatrix = window.innerHeight/10
    let percent = (Math.abs(hoopMatrix.m41)/(maxMatrix*2)).toFixed(4) * 100
    if(e.code==='KeyW'&&ableShoot){
      ball.classList.add('shoot');
      // setAbleShoot(false);
      if(percent>=20&&percent<=30){
        setScore(prev => prev + 1)
      }
      else{
        setLife(prev => prev - 1);
        if(health.childNodes.length>0){
          var c = health.firstElementChild
          health.removeChild(c)
          c = health.firstElementChild
        }
      }
      ball.addEventListener('animationend',()=>{
        // setAbleShoot(true);
        ball.classList.remove('shoot');
      })
    }
  }
  const handleClick = ()=>{
    const ball = document.getElementById('ball').firstChild;
    const hoop = document.getElementById('hoop').firstChild;
    const health = document.getElementById('health');
    const hoopTransform = window.getComputedStyle(hoop);
    const hoopMatrix = new DOMMatrixReadOnly(hoopTransform.transform)
    let maxMatrix = window.innerHeight/10
    let percent = (Math.abs(hoopMatrix.m41)/(maxMatrix*2)).toFixed(4) * 100
    if(ableShoot){
      ball.classList.add('shoot');
      setAbleShoot(false);
      if(percent>=20&&percent<=30){
        setScore(score + 1)
      }
      else{
        setLife(life - 1);
        if(health.childNodes.length>0){
          var c = health.firstElementChild
          health.removeChild(c)
          c = health.firstElementChild
        }
      }
      ball.addEventListener('animationend',()=>{
        setAbleShoot(true);
        ball.classList.remove('shoot');
      })
    }
  }

  const handleRestart = ()=>{
    const menu  = document.getElementById('menu')
    const option = document.getElementById('option')
    const games = document.getElementById('games')
    const game1  = document.getElementById('g1Container')
    const health = document.getElementById('health')
    menu.classList.remove('none')
    option.classList.remove('none')
    games.classList.remove('none')
    game1.classList.add('none')
    setScore(0);
    setLife(3);
    setGameOver(false);
    health.innerHTML = `<div>❤</div>
                        <div>❤</div>
                        <div>❤</div>`
}

  return (
    <div className='Game1Container' id='g1Container'>
        <div className='basketHoopContainer' id='hoop' style={{zIndex:'1'}}>
            <BasketHoop />
        </div>
        <div className='scoreDisplay' style={{zIndex:'0'}}>
            <p>score:{score}</p>
        </div>
        <div className='basketBallContainer' id='ball' style={{zIndex:'2'}} onClick={handleClick}>
            <BasketBall />
        </div>
        <div className='healthContainer' id='health'>
          <div>❤</div>
          <div>❤</div>
          <div>❤</div>
        </div>
        {gameOver&&<div className='ikun'>
                      <div className='gameOver'>Game Over</div>
                      <div className='tieSanKao'><GameOverAni /></div>
                      <div className='score'>score: {score}</div>
                      <div className='backBtn' onClick={handleRestart}>Back</div>
                    </div>}
    </div>
  )
}
