import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../containers/Home'

export interface CartDish extends Dish {
  quantity: number
}

interface CartInitial {
  isModalOpen: boolean
  isCartOpen: boolean
  cartContent: CartDish[]
}

const initialState: CartInitial = {
  isModalOpen: false,
  isCartOpen: false,
  cartContent: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleShowCart(state, actions: PayloadAction<boolean>) {
      state.isCartOpen = actions.payload
    },
    handleShowModal(state, actions: PayloadAction<boolean>) {
      state.isModalOpen = actions.payload
    },
    voidCartContent(state, actions: PayloadAction<[]>) {
      state.cartContent = actions.payload
    },
    addToCart(state, actions: PayloadAction<Dish>) {
      if (state.cartContent.some((dish) => dish.id === actions.payload.id)) {
        state.cartContent = state.cartContent.map((dish) => {
          if (dish.id === actions.payload.id) {
            return { ...dish, quantity: dish.quantity + 1 }
          }
          return dish
        })
      } else {
        state.cartContent = [
          ...state.cartContent,
          { ...actions.payload, quantity: 1 }
        ]
      }
    },
    removeFromCart(state, actions: PayloadAction<Dish>) {
      state.cartContent = state.cartContent.filter(
        (dish) => dish.id !== actions.payload.id
      )
    },
    increaseItem(state, actions: PayloadAction<Dish>) {
      state.cartContent = state.cartContent.map((dish) => {
        if (dish.id === actions.payload.id) {
          return { ...dish, quantity: dish.quantity + 1 }
        }
        return dish
      })
    },
    decreaseItem(state, actions: PayloadAction<Dish>) {
      state.cartContent = state.cartContent.reduce((acc: CartDish[], dish) => {
        if (dish.id === actions.payload.id) {
          if (dish.quantity === 1) {
            return acc
          } else {
            return [...acc, { ...dish, quantity: dish.quantity - 1 }]
          }
        }
        return [...acc, dish]
      }, [])
    }
  }
})

export const {
  handleShowCart,
  handleShowModal,
  voidCartContent,
  addToCart,
  removeFromCart,
  increaseItem,
  decreaseItem
} = cartSlice.actions

export const CartReducer = cartSlice.reducer
