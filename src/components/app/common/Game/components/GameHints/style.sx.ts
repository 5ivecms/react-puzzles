import type { SxProps } from '@mui/material'

import { theme, YELLOW } from '../../../../../../core/config/theme.config'

export const hintIcon: SxProps = {
  color: YELLOW,
  cursor: 'pointer',
  height: 50,
  position: 'relative',
  width: 50,
  [theme.breakpoints.down('sm')]: {
    height: 40,
    width: 40,
  },
}

export const listItem: SxProps = {
  p: 0,
}
