import React, { useState, useRef } from 'react'

interface NumbersTypes {
  firstNumber: number
  secondNumber: number
}

const Multiplication: React.FC = () => {
  const [numbers, setNumbers] = useState<NumbersTypes>({
    firstNumber: 0,
    secondNumber: 0,
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const [startState, setStartState] = useState(false)
  const [answerNumber, setAnswerNumber] = useState('')
  const getRandomNumber = (count: number) => {
    return Math.floor(Math.random() * count) + 1
  }
  const setRandomNumbers = () => {
    const randomFirstNumber: number = getRandomNumber(99)
    const randomSecondNumber: number = getRandomNumber(9)
    console.log('ops')
    setNumbers({
      firstNumber: randomFirstNumber,
      secondNumber: randomSecondNumber,
    })
    return
  }
  const next = () => {
    setAnswerNumber('')
    return setRandomNumbers()
  }
  const answerNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredNumber = event.target.value
    if (inputRef.current !== null) inputRef.current.focus()
    return setAnswerNumber(enteredNumber)
  }
  const getMultiplication = ({
    firstNumber,
    secondNumber,
  }: NumbersTypes): number => {
    return firstNumber * secondNumber
  }
  const checkAnswer = () => {
    if (
      Number(answerNumber) ===
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
  const handleStartButton = (): void => {
    next()
    setStartState(true)
  }
  const StartButton = (): JSX.Element => {
    if (!startState) {
      return (
        <button type="button" onClick={() => handleStartButton()}>
          Start
        </button>
      )
    } else {
      return <div></div>
    }
  }
  const Game = (): JSX.Element => {
    if (startState) {
      return (
        <>
          <div>{numbers.firstNumber}</div> *
          <div>{numbers.secondNumber}</div>
          <input autoFocus={true} type="text" ref={inputRef} value={answerNumber} onChange={answerNumberHandler} />
          <button type="button" onClick={() => checkAnswer()}>
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
