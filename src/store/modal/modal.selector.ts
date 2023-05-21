import { RootState } from '../store'

export const selectModal = (state: RootState) => state.modal.modal
export const selectContentModal = (state: RootState) => state.modal.contentModal
