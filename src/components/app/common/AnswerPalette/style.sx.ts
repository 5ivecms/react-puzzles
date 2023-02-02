import type { SxProps } from '@mui/material'

const BUTTON_WIDTH = 64
const BUTTON_HEIGHT = 64

export const buttonsContainer: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: -0.5,
  marginRight: -0.5,
}

export const buttonItem: SxProps = {
  p: 0.5,
}

export const emptyLetter: SxProps = {
  backgroundColor: '#f5f5f5',
  border: '1px solid #e9e9e9',
  borderRadius: '4px',
  height: BUTTON_HEIGHT,
  width: BUTTON_WIDTH,
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
}
