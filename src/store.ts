import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { MultiplicationReducer } from './features/multiplication'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  MultiplicationState: MultiplicationReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
