import { RootState } from '../store'
import { createSelector } from 'reselect'

const selectModalReducer = (state: RootState) => state.modal

export const selectModal = createSelector(
  [selectModalReducer],
  (modal) => modal.modal
)

export const selectContentModal = createSelector(
  [selectModalReducer],
  (modal) => modal.contentModal
)
