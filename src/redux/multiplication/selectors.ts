import { MultiplicationGameState } from './types'
import { getMultiplication } from './utils'

export const getGameConfiguration = (state: MultiplicationGameState) =>
  state.MultiplicationState.gameConfiguration
export const getAnswer = (state: MultiplicationGameState) =>
  state.MultiplicationState.answer
export const getGameStart = (state: MultiplicationGameState) =>
  state.MultiplicationState.startGame
export const getRandomNumbers = (state: MultiplicationGameState) =>
  state.MultiplicationState.randomNumbers
export const getCheckAnswer = (state: MultiplicationGameState) => {
  const { firstNumber, secondNumber } = state.MultiplicationState.randomNumbers
  const { answer } = state.MultiplicationState
  return Number(answer) === getMultiplication(firstNumber, secondNumber)
}
export const getAnswersCount = (state: MultiplicationGameState) =>
  state.MultiplicationState.answersCount
