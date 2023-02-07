import type { SxProps } from '@mui/material'

import { theme } from '../../../../core/config/theme.config'

export const pageHeaderContainer: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  my: 3,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    my: 2,
  },
}

export const pageHeaderLeftSx: SxProps = {
  alignItems: 'center',
  display: 'flex',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

export const backIconSx: SxProps = {
  mr: 1,
}
