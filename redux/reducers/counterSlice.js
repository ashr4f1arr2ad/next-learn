import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  data: [],
  singleData: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.count += 1
    },
    setData: (state, action) => {
      state.data = action.payload
    },
    setSingleData: (state, action) => {
      state.singleData = action.payload
    },
  },
})

//This is for dispatch
export const { setCounter, setData, setSingleData } = counterSlice.actions

export const allUser = (state) => state.counter.data
export const singleUserData = (state) => state.counter.singleData

//This is for configureStore
export default counterSlice.reducer
