import type { FC } from 'react'

interface GameControlsProps {
  canRefresh: boolean
}

const GameControls: FC<GameControlsProps> = ({ canRefresh = true }) => {
  return <div>{canRefresh && <>Обновляем</>}</div>
}

export default GameControls
