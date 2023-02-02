import type { GameProcess } from '../../types/game'
import type { RootState } from '../store'

export const selectRebuses = (state: RootState): Record<number, GameProcess> => state.games['rebus']
