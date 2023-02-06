/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import type { GameProcess, GameType } from '../../types/game'
import type { RootState } from '../store'

export const selectRebuses = (state: RootState): Record<number, GameProcess> => state.games['rebus']

export const selectRiddles = (state: RootState): Record<number, GameProcess> => state.games['riddle']

export const selectCharades = (state: RootState): Record<number, GameProcess> => state.games['charade']

export const selectPictures = (state: RootState): Record<number, GameProcess> => state.games['picture']

export const selectTelepaths = (state: RootState): Record<number, GameProcess> => state.games['telepath']

export const selectGameScores = (state: RootState): Record<string, number> => {
  const gameTypes = Object.keys(state.games) as GameType[]

  const scores = gameTypes.reduce((acc: Record<string, number>, item) => {
    const gameScores = Object.keys(state.games[item]).reduce(
      (scoresValue, gameId) => scoresValue + state.games[item][Number(gameId)].reward,
      0
    )
    return { ...acc, [item]: gameScores }
  }, {})

  return scores
}
