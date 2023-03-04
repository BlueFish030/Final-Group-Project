import React from 'react'
import { useState } from 'react'
import Game1 from './Game1'
import Game2 from './Game2'
import Game3 from './Game3'
import Game4 from './Game4'
import Game1pic from './Game1pic'
import Game2pic from './Game2pic'
import Game3pic from './Game3pic'
import Game4pic from './Game4pic'


export default function Menu() {
    const [game,setGame] = useState('')
    const bgm = document.getElementById('bgm')
    const clickAudio = document.getElementById('clickAudio')
    const [vol,setVol] = useState(bgm.volume)
    const [clickVol,setClickVol] = useState(clickAudio.volume)
    const [login,setLogin] = useState(false)
    const [userN,setUserN] = useState(0)

    const handleClick = (e)=>{
        const menu  = document.getElementById('menu')
        const option = document.getElementById('option')
        const games = document.getElementById('games')
        const volume = document.getElementById('volume')
        const app = document.getElementById('app')
        const darkBtnC = document.getElementById('darkBtnC')
        const redBtnc = document.getElementById('redBtnc')
        // console.log(e.target.id)
        if(e.target.id==='startBtn'){
            app.classList.add('scaleUp')
            menu.classList.add('none')
            option.classList.add('none')
            volume.classList.add('none')
            darkBtnC.classList.add('scaleUpDarkBtn')
            redBtnc.classList.add('scaleUpRedBtn')
        }else if(e.target.id==='optionBtn'){
            menu.classList.add('none')
        }else if(e.target.id==='volumeBtn'){
            option.classList.add('none')
            volume.classList.remove('none')
        }else if(e.target.id==='exitVolBtn'){
            volume.classList.add('none')
            option.classList.remove('none')
        }else if(e.target.id==='backBtn'){
            menu.classList.remove('none')
        }else if(e.target.className==='game'){
            games.classList.add('none')
            setGame(e.target.id)
            if(e.target.id==='game1'){
                const game1  = document.getElementById('g1Container')
                game1.classList.remove('none')
            } else if (e.target.id==='game2'){
                const game2  = document.getElementById('g2Container')
                game2.classList.remove('none')
            }else if(e.target.id==='game4'){
                const game4  = document.getElementById('g4Container')
                game4.classList.remove('none')
                const g4h3 = document.getElementById('g4h3');
                const g4h5 = document.getElementById('g4h5');
                g4h3.classList.remove('none');
                g4h5.classList.remove('none');
                document.getElementById('inputNum').disabled = false;
            }
            else if(e.target.id==='game3'){
                const game3  = document.getElementById('g3Container')
                game3.classList.remove('none')
            }
        }
    }

    const handleIncVol = ()=>{
        const bgm = document.getElementById('bgm')
        const clickAudio = document.getElementById('clickAudio')
        if(bgm.volume < 0.949){
            setVol(pre => pre + 0.05);
            setClickVol(pre => pre + 0.05);
            bgm.volume += 0.05;
            clickAudio.volume += 0.05;
        }else if(bgm.volume >= 0.949){
            setVol(1);
            setClickVol(1);
        }
        // console.log(bgm.volume)
    }

    const handleDecVol = ()=>{
        const bgm = document.getElementById('bgm')
        const clickAudio = document.getElementById('clickAudio')
        if(bgm.volume >= 0.05){
            setVol(pre => pre - 0.05);
            setClickVol(pre => pre - 0.05);
            bgm.volume -= 0.05;
            clickAudio.volume -= 0.05;
        }else if(bgm.volume <= 0.049){
            setVol(0);
            setClickVol(0);
        }
        // console.log(bgm.volume)
    }

    const handleChange = (e)=>{
        setUserN(e.target.value);
    }

    const handleKeyDown = (e)=>{
        if (e.code==='Enter') {
            const userNameInput = document.getElementById('userNameInput')
            const showUserName = document.getElementById('showUserName')
            userNameInput.classList.add('none')
            showUserName.innerText = 'Welcome, '+ userN +' !';
            showUserName.classList.add('showUserName')
            showUserName.addEventListener('animationend',()=>{
                const login = document.getElementById('login')
                login.classList.add('none')
            })
        }
    }
    
  return (
    <div id='menuContainer'>
        {!login&&
        <div className='Login' id='login'>
            <textarea id='userNameInput' type="text" required placeholder="What is your name?" onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
            <p id='showUserName'></p>
        </div>}
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
        <div className='Volume' id='volume'>
            <h1>Volume</h1>
            <div className='volBtnContainer'>
                <p onClick={handleDecVol} id='volDec'>-</p>
                <p>{Math.abs((vol*100).toFixed(2))}</p>
                <p onClick={handleIncVol} id='volInc'>+</p>
            </div>
            <div className='ExitVolBtn' id='exitVolBtn' onClick={handleClick}>Back</div>
        </div>
        <div className='Games' id='games'>
            <div className='game' id='game1' onClick={handleClick}><Game1pic /><p className='gameName'>BasketBall</p></div>
            <div className='game' id='game2' onClick={handleClick}><Game2pic /><p className='gameName'>Sic Bo</p></div>
            <div className='game' id='game3' onClick={handleClick}><Game3pic /><p className='gameName'>Ryzme</p></div>
            <div className='game' id='game4' onClick={handleClick}><Game4pic /><p className='gameName'>Guess Num</p></div>
        </div>
        {(game==='game1')&&<Game1 />}
        {(game==='game2')&&<Game2 />}
        {(game==='game3')&&<Game3 />}
        {(game==='game4')&&<Game4 />}
    </div>
  )
}
