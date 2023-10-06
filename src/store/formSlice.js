import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: { price_gte: 0, price_lte: 9000 },
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload,
        // price_gte: action.payload.price_gte,
        // price_lte: action.payload.price_lte,
      }
    },
    resetFormData: (state) => {
      state.value = initialState.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFormData, resetFormData } = formSlice.actions

export default formSlice.reducer
