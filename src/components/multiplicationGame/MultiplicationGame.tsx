import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionTypes, selectors } from '../../redux/multiplication'
import { getRandomRangeNumber, exitCheck, answerAnimation } from './utils'
import styles from './multiplication.module.scss'

const MultiplicationGame = (): JSX.Element => {
  const gameStart = useSelector(selectors.getGameStart)
  const navigate = useNavigate()
  const answer = useSelector(selectors.getAnswer)
  const randomNumbers = useSelector(selectors.getRandomNumbers)
  const getCheckAnswer = useSelector(selectors.getCheckAnswer)
  const answersCount = useSelector(selectors.getAnswersCount)
  const inputRef = useRef<HTMLInputElement>(null)
  const contentBlockRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  // const GameMode = useSelector(selectors.getGameMode)
  useEffect(() => {
    if (!gameStart) return navigate('/gameConfiguration')
    inputRef.current?.focus()
    return () => {
      dispatch({ type: actionTypes.END_GAME })
    }
  }, [])
  const next = () => {
    dispatch({ type: actionTypes.UPDATE_ANSWER, payload: '' })
    const newRandomNumbers = {
      firstNumber: getRandomRangeNumber(2, 9),
      secondNumber: getRandomRangeNumber(2, 9),
    }
    return dispatch({
      type: actionTypes.SET_RANDOM_NUMBERS,
      payload: newRandomNumbers,
    })
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '')
    if (value || value === '') {
      return dispatch({
        type: actionTypes.UPDATE_ANSWER,
        payload: value,
      })
    }
    return
  }
  const checkAnswerHandler = () => {
    if (getCheckAnswer !== undefined) {
      if (getCheckAnswer) {
        answerAnimation(contentBlockRef?.current, 'lawngreen')
        dispatch({ type: actionTypes.SET_GOOD_ANSWER_COUNT })
        return next()
      } else {
        answerAnimation(contentBlockRef?.current, 'red')
        return dispatch({ type: actionTypes.SET_BAD_ANSWER_COUNT })
      }
    }
    return
  }
  const exitButtonHandler = () => {
    if (exitCheck()) {
      dispatch({ type: actionTypes.END_GAME })
      return navigate('/')
    } else {
      return inputRef.current?.focus()
    }
  }
  const handleEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') return checkAnswerHandler()
  }
  return (
    <div className={styles.container}>
      <div className={styles.content} ref={contentBlockRef}>
        <div className={styles.answersCountBlock}>
          <div className={`${styles.answersCount} ${styles.good}`}>
            {answersCount.goodAnswer}
          </div>
          <div className={`${styles.answersCount} ${styles.bad}`}>
            {answersCount.badAnswer}
          </div>
        </div>
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

export default MultiplicationGame
