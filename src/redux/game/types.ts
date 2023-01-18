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
interface SetGoodAnswerCount {
  type: typeof actionTypes.SET_GOOD_ANSWER_COUNT
}
interface SetBadAnswerCount {
  type: typeof actionTypes.SET_BAD_ANSWER_COUNT
}
interface EndGame {
  type: typeof actionTypes.END_GAME
}
interface SetLevelDifficulty {
  type: typeof actionTypes.SET_LEVEL_DIFFICULTY
  payload: string
}
interface SetGameType {
  type: typeof actionTypes.SET_GAME_TYPE
  payload: string
}
export type ActionTypes =
  | SetRandomNumbers
  | UpdateAnswer
  | SetStartGame
  | SetGoodAnswerCount
  | SetBadAnswerCount
  | EndGame
  | SetLevelDifficulty
  | SetGameType

export interface GameState {
  GameState: {
    randomNumbers: {
      firstNumber: number
      secondNumber: number
    }
    answer: number
    gameStart: boolean
    levelDifficulty: string
    gameType: string
    answersCount: {
      goodAnswer: number
      badAnswer: number
    }
  }
}
