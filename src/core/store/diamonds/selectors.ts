import type { RootState } from '../store'

export const selectDiamondsCount = (state: RootState): number => state.diamonds.count
