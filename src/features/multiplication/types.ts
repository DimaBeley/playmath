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
interface SetGameMode {
  type: typeof actionTypes.SET_GAME_MODE
  payload: boolean
}
export type MultiplicationActionTypes =
  | SetRandomNumbersAction
  | UpdateAnswerAction
  | SetStartAction
  | SetGameMode

export interface MultiplicationGameState {
  MultiplicationState: {
    gameMode: {
      firstNumberRange: number
      secondNumberRange: number
    }
    randomNumbers: {
      firstNumber: number
      secondNumber: number
    }
    answer: number
    startGame: boolean
  }
}
