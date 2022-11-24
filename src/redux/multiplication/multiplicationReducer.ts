/* eslint-disable @typescript-eslint/default-param-last */
import * as actionTypes from './actionTypes'
import { MultiplicationActionTypes } from './types'

const initialState = {
  gameConfiguration: {
    firstNumberRange: 0,
    secondNumberRange: 0,
    gameType: '',
  },
  randomNumbers: {
    firstNumber: 0,
    secondNumber: 0,
  },
  answer: '',
  startGame: false,
  checkAnswer: false,
}

export default (state = initialState, action: MultiplicationActionTypes) => {
  switch (action.type) {
    case actionTypes.SET_RANDOM_NUMBERS:
      return {
        ...state,
        randomNumbers: {
          firstNumber: action.payload.firstNumber,
          secondNumber: action.payload.secondNumber,
        },
      }
    case actionTypes.SET_START:
      return { ...state, startGame: !state.startGame }
    case actionTypes.UPDATE_ANSWER:
      return { ...state, answer: action.payload }
    default:
      return state
  }
}
