import type { SxProps } from '@mui/material'

import { theme } from '../../../../core/config/theme.config'

export const pageTitle: SxProps = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
  },
}
