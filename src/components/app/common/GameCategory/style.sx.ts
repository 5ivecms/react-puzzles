import type { SxProps } from '@mui/material'

import { theme, YELLOW } from '../../../../core/config/theme.config'

export const categoryImageBox: SxProps = {
  alignItems: 'center',
  display: 'flex',
  height: 100,
  justifyContent: 'center',
  mb: 2,
  width: '100%',
}

export const cardContent: SxProps = {
  [theme.breakpoints.down('sm')]: {
    p: 1,
  },
}

export const categoryTitle: SxProps = {
  '@media (max-width: 359px)': {
    fontSize: '1rem',
  },
  '@media (max-width: 700px)': {
    fontSize: '1.375rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
    mb: 0.5,
  },
  mb: 1.5,
}

export const buttonsBox: SxProps = {
  display: 'flex',
  justifyContent: 'center',
}

export const starIcon: SxProps = {
  color: YELLOW,
  height: 30,
  mr: 1,
  [theme.breakpoints.down('sm')]: {
    height: 24,
    mr: 0.5,
    width: 24,
  },
  width: 30,
}

export const ratingText: SxProps = {
  '@media (max-width: 700px)': {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}

export const ratingBox: SxProps = {
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}
