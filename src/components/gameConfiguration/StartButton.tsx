import React from 'react'
import { actionTypes } from '../../features/multiplication'
import { getRandomRangeNumber } from '../multiplication/utils'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from '../gameConfiguration/Gameconfiguration.module.scss'
const StartButton: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const startButtonHandler = () => {
    dispatch({ type: actionTypes.SET_START })
    dispatch({
      type: actionTypes.SET_RANDOM_NUMBERS,
      payload: {
        firstNumber: getRandomRangeNumber(2, 9),
        secondNumber: getRandomRangeNumber(2, 9),
      },
    })
    dispatch({
      type: actionTypes.UPDATE_ANSWER,
      payload: '',
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
