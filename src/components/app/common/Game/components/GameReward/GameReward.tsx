import { Button, Typography } from '@mui/material'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { formatTime } from '../../utils'
import { titleSx } from './style.sx'

interface GameRewardProps {
  nextUrl?: string
  time: number
  title: string
}

const GameReward: FC<GameRewardProps> = ({ title, time, nextUrl }) => {
  return (
    <>
      <Typography sx={titleSx} variant="h3">
        {title}
      </Typography>
      <Typography variant="h6">Выполнено за</Typography>
      <Typography variant="h5">{formatTime(time)}</Typography>
      {nextUrl && (
        <Button component={Link} to={nextUrl} variant="contained">
          Далее
        </Button>
      )}
    </>
  )
}

export default GameReward
