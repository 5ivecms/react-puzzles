import type { SxProps } from '@mui/material'

import { theme } from '../../../../core/config/theme.config'

const BUTTON_WIDTH = 64
const BUTTON_HEIGHT = 64

export const buttonsContainer: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
}

export const buttonItem: SxProps = {
  flex: 1,
  maxWidth: 72,
  p: 0.5,
  [theme.breakpoints.down('sm')]: {
    maxWidth: 54,
    p: 0.25,
  },
}

export const emptyLetter: SxProps = {
  backgroundColor: '#f5f5f5',
  border: '1px solid #e9e9e9',
  borderRadius: '4px',
  height: BUTTON_HEIGHT,
  margin: '0 auto',
  maxWidth: BUTTON_WIDTH,
  [theme.breakpoints.down('sm')]: {
    height: 50,
    maxWidth: 50,
  },
}

export const letterButton: SxProps = {
  ...emptyLetter,
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  fontSize: 24,
  fontWeight: 'bold',
  justifyContent: 'center',
}

export const wordsSeparator: SxProps = {
  alignItems: 'center',
  display: 'flex',
  fontSize: 48,
  justifyContent: 'center',
  marginLeft: 1,
  marginRight: 1,
  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
  },
}
