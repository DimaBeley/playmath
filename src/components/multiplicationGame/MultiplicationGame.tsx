import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionTypes, selectors } from '../../redux/game'
import { answerAnimation, exitCheck, getRandomRangeNumber } from './utils'
import styles from './multiplication.module.scss'
import data from '../data.json'
import GoBackButton from '../goBackButton'

const MultiplicationGame = (): JSX.Element => {
  const gameStart = useSelector(selectors.getGameStart)
  const navigate = useNavigate()
  const answer = useSelector(selectors.getAnswer)
  const levelDifficulty = useSelector(selectors.getLevelDifficulty)
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
    const { firstNumberRange, secondNumberRange }: any =
      data.levels[levelDifficulty as keyof typeof data.levels] // output NumberRange: [number, number]
    const newRandomNumbers = {
      firstNumber: getRandomRangeNumber(
        firstNumberRange[0],
        firstNumberRange[1]
      ),
      secondNumber: getRandomRangeNumber(
        secondNumberRange[0],
        secondNumberRange[1]
      ),
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
        next()
        return inputRef.current?.focus()
      } else {
        answerAnimation(contentBlockRef?.current, 'red')
        dispatch({ type: actionTypes.SET_BAD_ANSWER_COUNT })
        return inputRef.current?.focus()
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
          inputMode="numeric"
        />
        <p className={styles.pressEnterTip}>Press Enter to check</p>
        <button
          type="submit"
          onClick={() => checkAnswerHandler()}
          className={styles.checkAnswerButton}
        >
          <span>check answer</span>
        </button>
        <GoBackButton callback={exitButtonHandler} text={'Exit to Menu'} />
      </div>
    </div>
  )
}

export default MultiplicationGame
