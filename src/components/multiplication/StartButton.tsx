import React from 'react'
import { actionTypes, selectors } from '../../features/multiplication'
import { getRandomRangeNumber } from './utils'
import { useDispatch, useSelector } from 'react-redux'
const StartButton: React.FC = () => {
  const dispatch = useDispatch()
  const gameStart = useSelector(selectors.getGameStart)
  const startButtonHandler = () => {
    dispatch({ type: actionTypes.SET_START })
    dispatch({
      type: actionTypes.SET_RANDOM_NUMBERS,
      payload: {
        firstNumber: getRandomRangeNumber(1, 9),
        secondNumber: getRandomRangeNumber(10, 99),
      },
    })
    dispatch({
      type: actionTypes.UPDATE_ANSWER,
      payload: '',
    })
  }
  if (!gameStart) {
    return (
      <button type="button" onClick={() => startButtonHandler()}>
        Start
      </button>
    )
  } else {
    return <div></div>
  }
}

export default StartButton
