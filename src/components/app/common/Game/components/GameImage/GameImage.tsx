import { Box } from '@mui/material'
import type { FC } from 'react'

import { container } from './style.sx'

interface GameImageProps {
  src: string
}

const GameImage: FC<GameImageProps> = ({ src }) => {
  return (
    <Box sx={container}>
      <img alt="" src={src} style={{ maxWidth: '100%' }} />
    </Box>
  )
}

export default GameImage
