import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: { table: true, list: false, slideShow: false },
}

export const viewmodeSlice = createSlice({
  name: 'viewmode',
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.value = { ...action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeMode } = viewmodeSlice.actions

export default viewmodeSlice.reducer
