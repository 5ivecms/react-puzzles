import { CheckCircle, Star } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { appRoutes } from '../../../../core/config/routes.config'
import { YELLOW } from '../../../../core/config/theme.config'
import type { GameProcess, GameProcessStatus } from '../../../../core/types/game'
import type { Rebus } from '../../../../core/types/models/rebus'
import { formatTime } from '../../common/Game/utils'
import { cardHeader, rebusNum } from './style.sx'

const buttonTextMap: Record<GameProcessStatus, string> = {
  completed: 'Повторить',
  new: 'Начать',
  process: 'Продолжить',
}

interface RebusCardProps {
  gameProcess: GameProcess
  rebus: Rebus
}

const RebusCard: FC<RebusCardProps> = ({ rebus, gameProcess }) => {
  return (
    <Grid xs={2} item>
      <Card>
        <CardContent sx={{ position: 'relative' }}>
          {gameProcess.status === 'completed' && (
            <CheckCircle color="success" sx={{ left: 10, position: 'absolute', top: 10 }} />
          )}
          <Box sx={cardHeader}>
            <Box sx={rebusNum}>{rebus.id}</Box>
          </Box>

          <Typography component="div" textAlign="center" variant="h6">
            {formatTime(gameProcess.time)}
          </Typography>
          <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <Star sx={{ color: YELLOW, marginRight: 0.5 }} />
            <Typography component="div" textAlign="center" variant="h5">
              {gameProcess.reward} очков
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} size="medium" to={appRoutes.rebuses.view(rebus.id)} variant="contained">
            {buttonTextMap[gameProcess.status]}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default RebusCard
