/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import rebusesData from '../../../data/rebuses.json'
import type { GameProcess, GameType } from '../../types/game'
import type { Rebus } from '../../types/models/rebus'
import type { GamesSliceState } from './types'

const rebuses = rebusesData as Rebus[]
const rebusesState = rebuses.reduce((acc: Record<number, GameProcess>, rebus) => {
  const item: GameProcess = { id: rebus.id, reward: 0, status: 'new', time: 0 }
  return { ...acc, [rebus.id]: item }
}, {})

const initialState: GamesSliceState = {
  rebus: rebusesState,
}

const gamesSlice = createSlice({
  initialState,
  name: 'games',
  reducers: {
    setCompleted(state, action: PayloadAction<{ id: number; reward: number; time: number; type: GameType }>) {
      const { type, id, time, reward } = action.payload
      if (Object.keys(state[type]).includes(`${id}`)) {
        state[type][id].time = time
        state[type][id].status = 'completed'
        state[type][id].reward = reward
      }
    },
  },
})

export const { setCompleted } = gamesSlice.actions

export default gamesSlice.reducer
