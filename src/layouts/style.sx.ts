import type { SxProps } from '@mui/material'

import { theme } from '../core/config/theme.config'

export const container: SxProps = {
  background: '#fff',
  minHeight: '100vh',
  overflow: 'hidden',
}

export const content: SxProps = {
  pb: 2,
  pl: 2,
  pr: 2,
  [theme.breakpoints.down('sm')]: {
    pb: 1,
    pl: 1,
    pr: 1,
  },
}
