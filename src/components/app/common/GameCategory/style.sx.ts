import type { SxProps } from '@mui/material'

import { YELLOW } from '../../../../core/config/theme.config'

export const categoryImageBox: SxProps = {
  alignItems: 'center',
  display: 'flex',
  height: 100,
  justifyContent: 'center',
  mb: 2,
  width: '100%',
}

export const categoryTitle: SxProps = {
  mb: 1.5,
}

export const buttonsBox: SxProps = {
  display: 'flex',
  justifyContent: 'center',
}

export const starIcon: SxProps = {
  color: YELLOW,
  height: 34,
  mr: 1,
  width: 34,
}

export const ratingBox: SxProps = {
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}
