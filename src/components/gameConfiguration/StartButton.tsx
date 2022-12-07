import React from 'react'
import { actionTypes } from '../../redux/multiplication'
import { getRandomRangeNumber } from '../multiplicationGame/utils'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from '../gameConfiguration/Gameconfiguration.module.scss'
const StartButton: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const startButtonHandler = () => {
    dispatch({
      type: actionTypes.SET_START_GAME,
      payload: true,
    })
    dispatch({
      type: actionTypes.SET_RANDOM_NUMBERS,
      payload: {
        firstNumber: getRandomRangeNumber(2, 9),
        secondNumber: getRandomRangeNumber(2, 9),
      },
    })
    return navigate('/multiplicationGame')
  }
  return (
    <button
      className={styles.startButton}
      type="button"
      onClick={() => startButtonHandler()}
    >
      Start
    </button>
  )
}

export default StartButton
