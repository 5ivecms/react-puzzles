import type { SxProps } from '@mui/material'

import { theme } from '../../../../core/config/theme.config'

export const imageList: SxProps = {
  [theme.breakpoints.down('sm')]: {
    height: '150px !important',
  },
  '@media (max-width: 400px)': {
    height: '120px !important',
  },
  height: '190px !important',

  m: 0,
  width: '100%',
}

export const imageListItem: SxProps = {
  [theme.breakpoints.down('sm')]: {
    height: '150px !important',
  },
  '@media (max-width: 400px)': {
    height: '120px !important',
  },

  height: '190px !important',
}
