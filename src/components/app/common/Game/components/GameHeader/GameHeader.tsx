import { ArrowBackIosNewOutlined } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { backIconSx, container, titleSx } from './style.sx'

interface GameHeaderProps {
  title: string
}

const GameHeader: FC<GameHeaderProps> = ({ title }) => {
  const navigate = useNavigate()

  const goBack = (): void => {
    navigate(-1)
  }

  return (
    <Box sx={container}>
      <IconButton color="info" onClick={goBack} size="medium" sx={backIconSx}>
        <ArrowBackIosNewOutlined />
      </IconButton>
      <Typography sx={titleSx} variant="h3">
        {title}
      </Typography>
    </Box>
  )
}

export default GameHeader
