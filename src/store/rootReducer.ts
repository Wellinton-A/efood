import { combineReducers } from '@reduxjs/toolkit'
import { modalReducer } from './modal/modal.reducer'

import api, { apiReducer } from '../service/api'
import { CartReducer } from './cart/cart.reducer'

const rootReducer = combineReducers({
  modal: modalReducer,
  cart: CartReducer,
  [api.reducerPath]: apiReducer
})

export default rootReducer
