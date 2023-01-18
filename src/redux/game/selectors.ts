import { GameState } from './types'
import { getMultiplicationNumbers } from './utils'

export const getAnswer = (state: GameState) => state.GameState.answer
export const getGameStart = (state: GameState) => state.GameState.gameStart
export const getRandomNumbers = (state: GameState) =>
  state.GameState.randomNumbers
export const getCheckAnswer = (state: GameState) => {
  const { firstNumber, secondNumber } = state.GameState.randomNumbers
  const multiplicationResult = getMultiplicationNumbers(
    firstNumber,
    secondNumber
  )
  const playerAnswer = Number(state.GameState.answer)
  return playerAnswer === 0 ? undefined : playerAnswer === multiplicationResult
}
export const getAnswersCount = (state: GameState) =>
  state.GameState.answersCount

export const getLevelDifficulty = (state: GameState) => {
  return state.GameState.levelDifficulty
}
