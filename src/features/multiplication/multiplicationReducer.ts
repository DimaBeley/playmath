/* eslint-disable @typescript-eslint/default-param-last */
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as actionTypes from './actionTypes'
import { MultiplicationActionTypes } from './types'

const initialState = {
  gameMode: {
    firstNumberRange: 0,
    secondNumberRange: 0,
  },
  randomNumbers: {
    firstNumber: 0,
    secondNumber: 0,
  },
  answer: 0,
  startGame: false,
  checkAnswer: false,
}

export default (state = initialState, action: MultiplicationActionTypes) => {
  switch (action.type) {
    case actionTypes.SET_RANDOM_NUMBERS:
      return {
        ...state,
        randomNumbers: {
          firstNumber: 0,
          secondNumber: 0,
        },
      }
    case actionTypes.SET_START:
      return { ...state, startGame: !state.startGame }
    case actionTypes.CHECK_ANSWER:
      const checkAnswer =
        Number(state.answer) ===
        state.randomNumbers.firstNumber * state.randomNumbers.secondNumber
      return { ...state, checkAnswer }
    case actionTypes.UPDATE_ANSWER:
      return { ...state, answer: action.payload }
    default:
      return state
  }
}
