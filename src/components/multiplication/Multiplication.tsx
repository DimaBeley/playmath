import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionTypes, selectors } from '../../features/multiplication'

interface NumbersTypes {
  firstNumber: number
  secondNumber: number
}

const Multiplication: React.FC = () => {
  const gameStart = useSelector(selectors.getGameStart)
  const answer = useSelector(selectors.getAnswer)
  const dispatch = useDispatch()
  const [numbers, setNumbers] = useState<NumbersTypes>({
    firstNumber: 0,
    secondNumber: 0,
  })
  // const GameMode = useSelector(selectors.getGameMode)
  // const [answerNumber, setAnswerNumber] = useState('')

  const getRandomRangeNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const setRandomNumbers = () => {
    const randomFirstNumber: number = getRandomRangeNumber(10, 99)
    const randomSecondNumber: number = getRandomRangeNumber(1, 9)
    setNumbers({
      firstNumber: randomFirstNumber,
      secondNumber: randomSecondNumber,
    })
    return
  }
  const next = () => {
    dispatch({ type: actionTypes.UPDATE_ANSWER, payload: 0 })
    return setRandomNumbers()
  }
  // const answerNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const enteredNumber = event.target.value
  // return setAnswerNumber(enteredNumber)
  // }
  const getMultiplication = ({
    firstNumber,
    secondNumber,
  }: NumbersTypes): number => {
    return firstNumber * secondNumber
  }
  // TODO check answer in reducer
  const checkAnswer = () => {
    if (
      Number(answer) ===
      getMultiplication({
        firstNumber: numbers.firstNumber,
        secondNumber: numbers.secondNumber,
      })
    ) {
      alert('well done')
      return next()
    } else {
      return alert('try again :(')
    }
  }
  const StartButton = (): JSX.Element => {
    if (!gameStart) {
      return (
        <button type="button" onClick={() => dispatch({type: actionTypes.SET_START})}>
          Start
        </button>
      )
    } else {
      return <div></div>
    }
  }
  const Game = (): JSX.Element => {
    if (gameStart) {
      return (
        <>
          <div>{numbers.firstNumber}</div> * <div>{numbers.secondNumber}</div>
          <input
            autoFocus={true}
            type="text"
            value={answer}
            onChange={(e) =>
              dispatch({
                type: actionTypes.UPDATE_ANSWER,
                payload: e.target.value,
              })
            }
          />
          <button type="submit" onClick={() => checkAnswer()}>
            check answer
          </button>
        </>
      )
    } else {
      return <div></div>
    }
  }
  return (
    <div>
      <StartButton />
      <Game />
    </div>
  )
}

export default Multiplication
