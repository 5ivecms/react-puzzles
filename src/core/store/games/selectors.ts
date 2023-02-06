import type { GameProcess } from '../../types/game'
import type { RootState } from '../store'

export const selectRebuses = (state: RootState): Record<number, GameProcess> => state.games['rebus']

export const selectRiddles = (state: RootState): Record<number, GameProcess> => state.games['riddle']

export const selectCharades = (state: RootState): Record<number, GameProcess> => state.games['charade']

export const selectPictures = (state: RootState): Record<number, GameProcess> => state.games['picture']

export const selectTelepaths = (state: RootState): Record<number, GameProcess> => state.games['telepath']
