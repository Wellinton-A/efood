import { RootState } from '../store'

export const selectIsModalOpen = (state: RootState) => state.cart.isModalOpen
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen
export const selectCartContent = (state: RootState) => state.cart.cartContent
