import React from 'react'
import BasketHoop from './BasketHoop'
import BasketBall from './BasketBall'

export default function Game1() {
  return (
    <div className='Game1Container' style={{zIndex:'1'}}>
        <div className='basketHoopContainer'>
            <BasketHoop />
        </div>
        <div className='scoreDisplay' style={{zIndex:'0'}}>
            <p>score:12</p>
        </div>
        <div className='basketBallContainer' style={{zIndex:'2'}}>
            <BasketBall />
        </div>
    </div>
  )
}
