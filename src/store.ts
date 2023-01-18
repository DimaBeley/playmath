import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { GameReducer } from './redux/game'

/* Create root reducer, containing all redux of the application */
const rootReducer = combineReducers({
  GameState: GameReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
