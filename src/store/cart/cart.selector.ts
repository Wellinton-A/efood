import { RootState } from '../store'

import { createSelector } from 'reselect'

const selecCartReducer = (state: RootState) => state.cart

export const selectIsModalOpen = createSelector(
  [selecCartReducer],
  (cart) => cart.isModalOpen
)

export const selectIsCartOpen = createSelector(
  [selecCartReducer],
  (cart) => cart.isCartOpen
)

export const selectCartContent = createSelector(
  [selecCartReducer],
  (cart) => cart.cartContent
)
