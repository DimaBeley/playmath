import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionTypes, selectors } from '../../redux/multiplication'
import { getRandomRangeNumber, exitCheck } from './utils'
import styles from './multiplication.module.scss'

const Game = (): JSX.Element => {
  // const gameStart = useSelector(selectors.getGameStart)
  const navigate = useNavigate()
  const answer = useSelector(selectors.getAnswer)
  const randomNumbers = useSelector(selectors.getRandomNumbers)
  const getCheckAnswer = useSelector(selectors.getCheckAnswer)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  // const GameMode = useSelector(selectors.getGameMode)
  useEffect(() => {
    inputRef.current?.focus()
    return () => {
      dispatch({
        type: actionTypes.UPDATE_ANSWER,
        payload: '',
      })
    }
  }, [])
  const next = () => {
    dispatch({ type: actionTypes.UPDATE_ANSWER, payload: '' })
    const newRandomNumbers = {
      firstNumber: getRandomRangeNumber(2, 9),
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
    if (exitCheck()) {
      dispatch({ type: actionTypes.SET_START })
      return navigate('/')
    }
  }
  const handleEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') checkAnswerHandler()
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.numbers}>
          <div className={styles.number}>{randomNumbers.firstNumber}</div>
          <span className={styles.operator}>X</span>
          <div className={styles.number}>{randomNumbers.secondNumber}</div>
        </div>
        <input
          ref={inputRef}
          autoFocus={true}
          type="text"
          value={answer}
          onChange={onChangeHandler}
          className={styles.multiplicationInput}
          onKeyDown={handleEnterSubmit}
          maxLength={9}
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
      </div>
    </div>
  )
}

export default Game
