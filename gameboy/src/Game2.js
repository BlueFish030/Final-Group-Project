import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //https://fontawesome.com/v5/docs/web/use-with/react
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

function Game2() {
  const [userBet, setUserBet] = useState('');
  const [computerRolls, setComputerRolls] = useState([]);
  const [roundOutcome, setRoundOutcome] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

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
      } else {
        setRoundOutcome('Computer wins!');
      }
    } else {
      if (total > 10) {
        setRoundOutcome('You win!'); //Big (total 11-18)
      } else {
        setRoundOutcome('Computer wins!');
      }
    }
  }

  function handleReset() {
    setUserBet('');
    setComputerRolls([]);
    setRoundOutcome('');
    setButtonDisabled(false);
  }

  function renderDice(roll) {
    switch (roll) {
      case 1:
        return (
          <>
            <FontAwesomeIcon icon={faDiceOne} />
            {' '}
          </>
        );
      case 2:
        return (
          <>
            <FontAwesomeIcon icon={faDiceTwo} />
            {' '}
          </>
        );
      case 3:
        return (
          <>
            <FontAwesomeIcon icon={faDiceThree} />
            {' '}
          </>
        );
      case 4:
        return (
          <>
            <FontAwesomeIcon icon={faDiceFour} />
            {' '}
          </>
        );
      case 5:
        return (
          <>
            <FontAwesomeIcon icon={faDiceFive} />
            {' '}
          </>
        );
      case 6:
        return (
          <>
            <FontAwesomeIcon icon={faDiceSix} />
            {' '}
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div className='Game2Container' id='g2Container'>
      <h1>Sic Bo</h1>
      <p>Select your bet:</p>
      <button disabled={buttonDisabled} onClick={() => handleBet('small')}>
        Small 
      </button>
      <button disabled={buttonDisabled} onClick={() => handleBet('big')}>
        Big
      </button>
      {userBet && (
        <div>
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