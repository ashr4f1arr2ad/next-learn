import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../reducers/counterSlice'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// })

// export default store

const rootReducers = combineReducers({
  counter: counterSlice.reducer,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }

  return rootReducers(state, action)
}

const makeStore = () =>
  configureStore({
    reducer,
    devTools: true,
  })

export const wrapper = createWrapper(makeStore, { debug: true })
