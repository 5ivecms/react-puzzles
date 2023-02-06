import { CheckCircle, Star } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import type { GameBase, GameProcess } from '../../../../core/types/game'
import { formatTime } from '../Game/utils'
import { styles } from './style.sx'
import { buttonTextMap } from './utils'

interface GameCardProps<T> {
  game: T
  gameProcess: GameProcess
  toGame: () => void
}

const GameCard = <T extends GameBase = GameBase>({ game, gameProcess, toGame }: GameCardProps<T>): ReactElement => {
  return (
    <Grid xs={3} item>
      <Card>
        <CardContent sx={styles.cardContent}>
          {gameProcess.status === 'completed' && <CheckCircle color="success" sx={styles.successIcon} />}
          <Box sx={styles.cardHeader}>
            <Box sx={styles.rebusNum}>{game.id}</Box>
          </Box>

          <Typography component="div" textAlign="center" variant="h6">
            {formatTime(gameProcess.time)}
          </Typography>

          <Box sx={styles.reward}>
            <Star sx={styles.rewardIcon} />
            <Typography component="div" textAlign="center" variant="h5">
              {gameProcess.reward} очков
            </Typography>
          </Box>
        </CardContent>

        <CardActions sx={styles.cardActions}>
          <Button onClick={toGame} size="medium" variant="contained">
            {buttonTextMap[gameProcess.status]}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default GameCard
