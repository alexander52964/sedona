import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import urlReducer from './urlSlice'
import formReducer from './formSlice'
import sortReducer from './sortSlice'
import viewmodeReducer from './viewmodeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    url: urlReducer,
    form: formReducer,
    sort: sortReducer,
    viewmode: viewmodeReducer,
  },
})
