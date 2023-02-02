import { Star } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import type { GameCategory as GameCategoryType } from '../../../../core/types/game'
import { buttonsBox, categoryImageBox, categoryTitle, ratingBox, starIcon } from './style.sx'

interface GameCategoryProps {
  category: GameCategoryType
}

const GameCategory: FC<GameCategoryProps> = ({ category: { title, url, image } }) => {
  return (
    <Grid xs={3} item>
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
            <Typography variant="h6">99 очков</Typography>
          </Box>
        </CardContent>
        <CardActions sx={buttonsBox}>
          <Button component={Link} size="medium" to={url} variant="contained">
            Продолжить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default GameCategory
