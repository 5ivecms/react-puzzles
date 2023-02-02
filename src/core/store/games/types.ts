import type { GameProcess, GameType } from '../../types/game'

export type GamesSliceState = Record<GameType, Record<number, GameProcess>>
