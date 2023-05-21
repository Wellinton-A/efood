import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../containers/Home'

interface Modal {
  modal: boolean
  contentModal: Dish
}

const initialState: Modal = {
  modal: false,
  contentModal: {
    foto: '',
    preco: 0,
    id: 0,
    descricao: '',
    porcao: '',
    nome: ''
  }
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal(state, actions: PayloadAction<boolean>) {
      state.modal = actions.payload
    },
    setContentModal(state, actions: PayloadAction<Dish>) {
      state.contentModal = actions.payload
    }
  }
})

export const { setModal, setContentModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer
