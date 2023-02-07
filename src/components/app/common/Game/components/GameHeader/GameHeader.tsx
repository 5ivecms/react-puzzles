import { ArrowBackIosNewOutlined, Diamond } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectDiamondsCount } from '../../../../../../core/store/diamonds/selectors'
import { backIconSx, container, titleSx } from './style.sx'

interface GameHeaderProps {
  title: string
}

const GameHeader: FC<GameHeaderProps> = ({ title }) => {
  const navigate = useNavigate()
  const diamondsCount = useSelector(selectDiamondsCount)

  const goBack = (): void => {
    navigate(-1)
  }

  return (
    <Box sx={container}>
      <Box sx={{ alignContent: 'center', alignItems: 'center', display: 'flex' }}>
        <IconButton color="info" onClick={goBack} size="medium" sx={backIconSx}>
          <ArrowBackIosNewOutlined />
        </IconButton>
        <Typography sx={titleSx} variant="h4">
          {title}
        </Typography>
      </Box>
      <Box sx={{ alignContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
        <Diamond sx={{ color: '#00aef1', height: 32, mr: 0.5, width: 32 }} />
        <Typography fontWeight="bold">{diamondsCount}</Typography>
      </Box>
    </Box>
  )
}

export default GameHeader
