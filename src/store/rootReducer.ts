import { combineReducers } from '@reduxjs/toolkit'
import { modalReducer } from './modal/modal.reducer'

import api, { apiReducer } from '../service/api'

const rootReducer = combineReducers({
  modal: modalReducer,
  [api.reducerPath]: apiReducer
})

export default rootReducer
