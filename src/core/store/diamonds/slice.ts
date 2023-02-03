import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { DiamondsSliceState } from './types'

const initialState: DiamondsSliceState = {
  count: 1000,
}

const diamondsSlice = createSlice({
  initialState,
  name: 'diamonds',
  reducers: {
    minusDiamonds(state, action: PayloadAction<{ count: number }>) {
      // eslint-disable-next-line no-param-reassign
      state.count -= action.payload.count
    },
    plusDiamonds(state, action: PayloadAction<{ count: number }>) {
      // eslint-disable-next-line no-param-reassign
      state.count += action.payload.count
    },
  },
})

export const { plusDiamonds, minusDiamonds } = diamondsSlice.actions

export default diamondsSlice.reducer
