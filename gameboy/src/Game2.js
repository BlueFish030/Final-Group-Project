import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //https://fontawesome.com/v5/docs/web/use-with/react
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import arrowImg from './arrow-1027_128.gif';

function Game2() {
  const [userBet, setUserBet] = useState('');
  const [computerRolls, setComputerRolls] = useState([]);
  const [roundOutcome, setRoundOutcome] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [userBalance, setUserBalance] = useState(100);
  const [betAmount, setBetAmount] = useState(10);

  function handleBack() {
    const menu = document.getElementById('menu');
    const option = document.getElementById('option');
    const games = document.getElementById('games');
    const game2 = document.getElementById('g2Container');
    menu.classList.remove('none');
    option.classList.remove('none');
    games.classList.remove('none');
    game2.classList.add('none');
  }

  function rollDice() {
    return [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
  }


  function handleBet(betType) {
    setUserBet(betType);
    setButtonDisabled(true);
    const rolls = rollDice();
    setComputerRolls(rolls);

    const total = rolls.reduce((sum, roll) => sum + roll, 0);

    if (betType === 'small') {
      if (total < 11) {
        setRoundOutcome('You win!'); //Small (total 3-10)
        setUserBalance(userBalance + betAmount);
      } else {
        setRoundOutcome('Computer wins!');
        setUserBalance(userBalance - betAmount);
      }
    } else {
      if (total > 10) {
        setRoundOutcome('You win!'); //Big (total 11-18)
        setUserBalance(userBalance + betAmount);
      } else {
        setRoundOutcome('Computer wins!');
        setUserBalance(userBalance - betAmount);
      }
    }
  }

  function handleReset() {
    setUserBet('');
    setComputerRolls([]);
    setRoundOutcome('');
    setButtonDisabled(false);
    setBetAmount(10);
  }

  function renderDice(roll) {
    switch (roll) {
      case 1:
        return (
          <>
            <FontAwesomeIcon icon={faDiceOne} className='diceIcon'/>
            {' '}
          </>
        );
      case 2:
        return (
          <>
            <FontAwesomeIcon icon={faDiceTwo} className='diceIcon'/>
            {' '}
          </>
        );
      case 3:
        return (
          <>
            <FontAwesomeIcon icon={faDiceThree} className='diceIcon'/>
            {' '}
          </>
        );
      case 4:
        return (
          <>
            <FontAwesomeIcon icon={faDiceFour} className='diceIcon'/>
            {' '}
          </>
        );
      case 5:
        return (
          <>
            <FontAwesomeIcon icon={faDiceFive} className='diceIcon'/>
            {' '}
          </>
        );
      case 6:
        return (
          <>
            <FontAwesomeIcon icon={faDiceSix} className='diceIcon'/>
            {' '}
          </>
        );
      default:
        return null;
    }
  }

  function handleBetAmountChange(event) {
    const newAmount = parseInt(event.target.value);
    if (!isNaN(newAmount)) {
      //set the amount should be between 0 and the max of userBalance
      setBetAmount(Math.max(0, Math.min(newAmount, userBalance))); 
    } else {
      setBetAmount('');
    }
  }

  return (
    <div className='Game2Container' id='g2Container'>
      <h1>Sic Bo</h1>
      <div id='g2c1'>
        <div>
          <p>Your Balance: {userBalance}</p>
        </div>
        <div>
          <label htmlFor="betAmountInput">Bet amount: </label>
          <input
            id="betAmountInput"
            type="number"
            value={betAmount}
            onChange={handleBetAmountChange}
          />
        </div>
      </div>
      <div id='g2c2'>
        <p> Select your bet </p>
        <img id='arrowImg' src={arrowImg} alt="arrow" />
        <button disabled={buttonDisabled} onClick={() => handleBet('small')}>
          Small 
        </button>
        <button disabled={buttonDisabled} onClick={() => handleBet('big')}>
          Big
        </button>
      </div>
      {userBet && (
        <div id='g2c3'>
          <p>Your bet: {userBet}</p>
          <p>
            Dice rolls:{' '}
            {computerRolls.map((roll, index) => (
              <span key={index}>{renderDice(roll)}</span>
            ))}
          </p>
          <p>{roundOutcome}</p>
          <button id="g2replayButton" onClick={handleReset}>Play again</button>
          <button id="g2backButton" onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Game2;