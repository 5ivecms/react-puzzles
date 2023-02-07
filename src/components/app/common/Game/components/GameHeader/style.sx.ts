import type { SxProps } from '@mui/material'

import { theme } from '../../../../../../core/config/theme.config'

export const container: SxProps = {
  alignItems: 'center',
  display: 'flex',
  my: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    my: 2,
  },
}

export const titleSx: SxProps = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
  },
}

export const backIconSx: SxProps = {
  mr: 1,
}
