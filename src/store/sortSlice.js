import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: `_sort=reiting&_order=desc`,
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortData: (state, action) => {
      state.value = action.payload.option
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSortData } = sortSlice.actions

export default sortSlice.reducer
