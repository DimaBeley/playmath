import React from 'react'
import { actionTypes, selectors } from '../../redux/multiplication'
import { getRandomRangeNumber } from '../multiplicationGame/utils'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './GameConfiguration.module.scss'
import data from '../data.json'

const StartButton: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const levelDifficulty = useSelector(selectors.getLevelDifficulty)
  const startButtonHandler = () => {
    const { firstNumberRange, secondNumberRange }: any =
      data.levels[levelDifficulty as keyof typeof data.levels]
    dispatch({
      type: actionTypes.SET_START_GAME,
      payload: true,
    })
    dispatch({
      type: actionTypes.SET_RANDOM_NUMBERS,
      payload: {
        firstNumber: getRandomRangeNumber(
          firstNumberRange[0],
          firstNumberRange[1]
        ),
        secondNumber: getRandomRangeNumber(
          secondNumberRange[0],
          secondNumberRange[1]
        ),
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
