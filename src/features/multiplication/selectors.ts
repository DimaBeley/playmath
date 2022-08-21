import { MultiplicationGameState } from './types'

export const getGameMode = (state: MultiplicationGameState) =>
  state.MultiplicationState.gameMode
export const getAnswer = (state: MultiplicationGameState) =>
  state.MultiplicationState.answer
export const getGameStart = (state: MultiplicationGameState) =>
  state.MultiplicationState.startGame
export const getRandomNumbers = (state: MultiplicationGameState) =>
  state.MultiplicationState.randomNumbers
