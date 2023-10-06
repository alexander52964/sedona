import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: {
    price_gte: 0,
    price_lte: 15000,
  },
}

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    addUrl: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUrl } = urlSlice.actions

export default urlSlice.reducer
