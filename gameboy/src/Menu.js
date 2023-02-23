import React from 'react'
import { useState } from 'react'
import Game1 from './Game1'
// import Game2 from './Game2'
// import Game3 from './Game3'
// import Game4 from './Game4'

export default function Menu() {
    const [game,setGame] = useState('')

    const handleClick = (e)=>{
        const menu  = document.getElementById('menu')
        const option = document.getElementById('option')
        const games = document.getElementById('games')
        console.log(e.target.id)
        if(e.target.id==='startBtn'){
            menu.classList.add('none')
            option.classList.add('none')
        }else if(e.target.id==='optionBtn'){
            menu.classList.add('none')
        }else if(e.target.id==='backBtn'){
            menu.classList.remove('none')
        }else if(e.target.className==='game'){
            games.classList.add('none')
            setGame(e.target.id)
        }
    }
  return (
    <div id='menuContainer'>
        <div className='Menu' id='menu'>
            <h1>MENU</h1>
            <ul className='menuList'>
                <li id='startBtn' onClick={handleClick}>Start</li>
                <li id='optionBtn' onClick={handleClick}>Option</li>
            </ul>
        </div>
        <div className='Option' id='option'>
                <h1>Options</h1>
                <ul className='optionList'>
                    <li id='volumeBtn' onClick={handleClick}>Volume</li>
                    <li id='backBtn' onClick={handleClick}>Back</li>
                </ul>

        </div>
        <div className='Games' id='games'>
            <div className='game' id='game1' onClick={handleClick}>a</div>
            <div className='game' id='game2' onClick={handleClick}>B</div>
            <div className='game' id='game3' onClick={handleClick}>c</div>
            <div className='game' id='game4' onClick={handleClick}>d</div>
        </div>
        {(game==='game1')&&<Game1 />}
        {/* {(game==='game2')&&<Game2 />}
        {(game==='game3')&&<Game3 />}
        {(game==='game4')&&<Game4 />} */}
    </div>
  )
}
