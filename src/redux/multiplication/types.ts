import * as actionTypes from './actionTypes'

interface SetRandomNumbers {
  type: typeof actionTypes.SET_RANDOM_NUMBERS
  payload: {
    firstNumber: number
    secondNumber: number
  }
}
interface UpdateAnswer {
  type: typeof actionTypes.UPDATE_ANSWER
  payload: number | string
}
interface SetStartGame {
  type: typeof actionTypes.SET_START_GAME
  payload: boolean
}
interface SetGameConfiguration {
  type: typeof actionTypes.SET_GAME_CONFIGURATION
  payload: boolean
}
interface SetGoodAnswerCount {
  type: typeof actionTypes.SET_GOOD_ANSWER_COUNT
}
interface SetBadAnswerCount {
  type: typeof actionTypes.SET_BAD_ANSWER_COUNT
}
interface EndGame {
  type: typeof actionTypes.END_GAME
}
export type MultiplicationActionTypes =
  | SetRandomNumbers
  | UpdateAnswer
  | SetStartGame
  | SetGameConfiguration
  | SetGoodAnswerCount
  | SetBadAnswerCount
  | EndGame

export interface MultiplicationGameState {
  MultiplicationState: {
    gameConfiguration: {
      firstNumberRange: number
      secondNumberRange: number
      gameType: string
    }
    randomNumbers: {
      firstNumber: number
      secondNumber: number
    }
    answer: number
    gameStart: boolean
    answersCount: {
      goodAnswer: number
      badAnswer: number
    }
  }
}
