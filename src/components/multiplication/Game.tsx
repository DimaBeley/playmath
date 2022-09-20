import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes, selectors } from '../../features/multiplication'
import { getRandomRangeNumber } from './utils'

const Game = (): JSX.Element => {
  const gameStart = useSelector(selectors.getGameStart)
  const answer = useSelector(selectors.getAnswer)
  const randomNumbers = useSelector(selectors.getRandomNumbers)
  const getCheckAnswer = useSelector(selectors.getCheckAnswer)
  const dispatch = useDispatch()
  // const GameMode = useSelector(selectors.getGameMode)
  const next = () => {
    dispatch({ type: actionTypes.UPDATE_ANSWER, payload: '' })
    const newRandomNumbers = {
      firstNumber: getRandomRangeNumber(1, 9),
      secondNumber: getRandomRangeNumber(10, 99),
    }
    return dispatch({
      type: actionTypes.SET_RANDOM_NUMBERS,
      payload: newRandomNumbers,
    })
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '')
    if (value || value === '') {
      dispatch({
        type: actionTypes.UPDATE_ANSWER,
        payload: value,
      })
    }
  }
  const checkAnswerHandler = () => {
    if (getCheckAnswer) {
      alert('well done')
      return next()
    } else {
      return alert('try again :(')
    }
  }
  const exitButtonHandler = () => {
    dispatch({ type: actionTypes.SET_START })
  }
  if (gameStart) {
    return (
      <>
        <div>{randomNumbers.firstNumber}</div> *{' '}
        <div>{randomNumbers.secondNumber}</div>
        <input
          autoFocus={true}
          type="text"
          value={answer}
          onChange={onChangeHandler}
        />
        <button type="submit" onClick={() => checkAnswerHandler()}>
          <span>check answer</span>
        </button>
        <button
          type="button"
          className={'right'}
          onClick={() => exitButtonHandler()}
        >
          <span>exit to menu</span>
        </button>
      </>
    )
  } else {
    return <div></div>
  }
}

export default Game
