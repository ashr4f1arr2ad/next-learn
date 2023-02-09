import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  data: [],
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
  },
})

//This is for dispatch
export const { setCounter, setData } = counterSlice.actions

//This is for configureStore
export default counterSlice.reducer
