import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value.push(action.payload.id)
    },
    decrement: (state, action) => {
      state.value = state.value.filter((el) => el !== action.payload.id)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
