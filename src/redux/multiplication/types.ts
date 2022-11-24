import * as actionTypes from './actionTypes'

interface SetRandomNumbersAction {
  type: typeof actionTypes.SET_RANDOM_NUMBERS
  payload: {
    firstNumber: number
    secondNumber: number
  }
}
interface UpdateAnswerAction {
  type: typeof actionTypes.UPDATE_ANSWER
  payload: number | string
}
interface SetStartAction {
  type: typeof actionTypes.SET_START
}
interface SetGameConfiguration {
  type: typeof actionTypes.SET_GAME_CONFIGURATION
  payload: boolean
}
export type MultiplicationActionTypes =
  | SetRandomNumbersAction
  | UpdateAnswerAction
  | SetStartAction
  | SetGameConfiguration

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
    startGame: boolean
  }
}
