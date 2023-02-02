import { Box, Typography } from '@mui/material'
import type { FC } from 'react'

import { titleSx } from './style.sx'

interface GameHeaderProps {
  title: string
}

const GameHeader: FC<GameHeaderProps> = ({ title }) => {
  return (
    <Box>
      <Typography sx={titleSx} variant="h3">
        {title}
      </Typography>
    </Box>
  )
}

export default GameHeader
