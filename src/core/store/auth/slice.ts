import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { ACCESS_TOKEN_KEY } from '../../config/access.config'
import type { AuthSliceState } from './types'

export const token = localStorage.getItem(ACCESS_TOKEN_KEY)

const initialState: AuthSliceState = {
  isAuth: !!token,
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setIsAuth(state, action: PayloadAction<{ isAuth: boolean }>) {
      const { isAuth } = action.payload
      // eslint-disable-next-line no-param-reassign
      state.isAuth = isAuth
    },
  },
})

export const { setIsAuth } = authSlice.actions

export default authSlice.reducer
