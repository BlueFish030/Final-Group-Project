import React from 'react'
import { useState , useEffect } from 'react'
import BasketHoop from './BasketHoop'
import BasketBall from './BasketBall'

export default function Game1() {
  const [score,setScore] = useState(0);
  // const [life,setLife] = useState(3);
  const [ableShoot,setAbleShoot] = useState(true);

  useEffect(()=>{
    window.addEventListener('keydown', handleShoot);
  })

  const handleShoot = (e)=>{
    const ball = document.getElementById('ball').firstChild;
    const hoop = document.getElementById('hoop').firstChild;
    const hoopTransform = window.getComputedStyle(hoop);
    const hoopMatrix = new DOMMatrixReadOnly(hoopTransform.transform)
    let maxMatrix = window.innerHeight/10
    let percent = (Math.abs(hoopMatrix.m41)/(maxMatrix*2)).toFixed(4) * 100
    if(e.code==='KeyW'&&ableShoot){
      // console.log(percent+'%')
      ball.classList.add('shoot');
      setAbleShoot(false);
      if(percent>=20&&percent<=30){
        setScore(score + 1)
        console.log('goal')
      }
      ball.addEventListener('animationend',()=>{
        setAbleShoot(true);
        ball.classList.remove('shoot');
      })
    }
  }

  return (
    <div className='Game1Container'>
        <div className='basketHoopContainer' id='hoop' style={{zIndex:'1'}}>
            <BasketHoop />
        </div>
        <div className='scoreDisplay' style={{zIndex:'0'}}>
            <p>score:{score}</p>
        </div>
        <div className='basketBallContainer' id='ball' style={{zIndex:'2'}}>
            <BasketBall />
        </div>
    </div>
  )
}