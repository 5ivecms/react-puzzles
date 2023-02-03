import type { GameProcessStatus } from '../../../../core/types/game'

export const buttonTextMap: Record<GameProcessStatus, string> = {
  completed: 'Повторить',
  new: 'Начать',
  process: 'Продолжить',
}
