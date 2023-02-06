/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import charadesData from '../../../data/charades.json'
import picturesData from '../../../data/pictures.json'
import rebusesData from '../../../data/rebuses.json'
import riddlesData from '../../../data/riddles.json'
import telepathsData from '../../../data/telepaths.json'
import type { GameProcess, GameType } from '../../types/game'
import type { Charade, Picture, Riddle } from '../../types/models'
import type { Rebus } from '../../types/models/rebus'
import type { Telepath } from '../../types/models/telepaths'
import type { GamesSliceState } from './types'

const rebuses = rebusesData as Rebus[]
const rebusesState = rebuses.reduce((acc: Record<number, GameProcess>, rebus, index) => {
  const item: GameProcess = { id: rebus.id, locked: index !== 0, reward: 0, status: 'new', time: 0 }
  return { ...acc, [rebus.id]: item }
}, {})

const riddles = riddlesData as Riddle[]
const riddlesState = riddles.reduce((acc: Record<number, GameProcess>, riddle, index) => {
  const item: GameProcess = { id: riddle.id, locked: index !== 0, reward: 0, status: 'new', time: 0 }
  return { ...acc, [riddle.id]: item }
}, {})

const charades = charadesData as Charade[]
const charadesState = charades.reduce((acc: Record<number, GameProcess>, charade, index) => {
  const item: GameProcess = { id: charade.id, locked: index !== 0, reward: 0, status: 'new', time: 0 }
  return { ...acc, [charade.id]: item }
}, {})

const pictures = picturesData as Picture[]
const picturesState = pictures.reduce((acc: Record<number, GameProcess>, picture, index) => {
  const item: GameProcess = { id: picture.id, locked: index !== 0, reward: 0, status: 'new', time: 0 }
  return { ...acc, [picture.id]: item }
}, {})

const telepaths = telepathsData as Telepath[]
const telepathsState = telepaths.reduce((acc: Record<number, GameProcess>, telepath, index) => {
  const item: GameProcess = { id: telepath.id, locked: index !== 0, reward: 0, status: 'new', time: 0 }
  return { ...acc, [telepath.id]: item }
}, {})

const initialState: GamesSliceState = {
  charade: charadesState,
  picture: picturesState,
  rebus: rebusesState,
  riddle: riddlesState,
  telepath: telepathsState,
}

const gamesSlice = createSlice({
  initialState,
  name: 'games',
  reducers: {
    openNextGame(state, action: PayloadAction<{ id: number; type: GameType }>) {
      const { id, type } = action.payload
      const nextGameId = id + 1
      const nextGame = { ...state[type][nextGameId] }

      if (!nextGame) {
        return
      }

      state[type][nextGameId] = { ...nextGame, locked: false }
    },
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

export const { setCompleted, openNextGame } = gamesSlice.actions

export default gamesSlice.reducer
