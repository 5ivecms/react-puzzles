import { Star } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectGameScores } from '../../../../core/store/games/selectors'
import type { GameCategory as GameCategoryType } from '../../../../core/types/game'
import { buttonsBox, categoryImageBox, categoryTitle, ratingBox, starIcon } from './style.sx'

interface GameCategoryProps {
  category: GameCategoryType
}

const GameCategory: FC<GameCategoryProps> = ({ category: { title, url, image, slug } }) => {
  const gameScores = useSelector(selectGameScores)
  const scores = Object.keys(gameScores).includes(slug) ? gameScores[slug] : 0

  return (
    <Grid md={3} sm={4} xs={6} item>
      <Card>
        <CardContent>
          <Box sx={categoryImageBox}>
            <img alt={title} src={image} />
          </Box>
          <Typography fontWeight="bold" sx={categoryTitle} textAlign="center" variant="h5">
            {title}
          </Typography>
          <Box sx={ratingBox}>
            <Star sx={starIcon} />
            <Typography variant="h6">{scores} очков</Typography>
          </Box>
        </CardContent>
        <CardActions sx={buttonsBox}>
          <Button component={Link} size="medium" to={url} variant="contained">
            {scores === 0 ? 'Начать' : 'Продолжить'}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default GameCategory
