import { Typography } from '@mui/material'
import type { FC } from 'react'

import { titleSx } from './style.sx'

interface GameRewardProps {
  time: number
  title: string
}

const GameReward: FC<GameRewardProps> = ({ title, time }) => {
  return (
    <>
      <Typography sx={titleSx} variant="h3">
        {title}
      </Typography>
      <Typography variant="h6">Выполнено за</Typography>
      <Typography variant="h5">{time}</Typography>
    </>
  )
}

export default GameReward
