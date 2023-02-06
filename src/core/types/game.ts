export interface GameBase {
  id: number
}

export type GameType = 'charade' | 'picture' | 'rebus' | 'riddle' | 'telepath'

export type GameProcessStatus = 'completed' | 'new' | 'process'

export type GameStatus = 'completed' | 'fail' | 'process'

export interface GameProcess {
  id: number
  reward: number
  status: GameProcessStatus
  time: number
}

export type GameCategory = {
  image: string
  title: string
  url: string
}

export type Word = {
  index: number
  isAnswerWord: boolean
  locked: boolean
  symbol: string
}
