import type { SxProps } from '@mui/material'

const BUTTON_WIDTH = 74
const BUTTON_HEIGHT = 74

export const buttonsContainer: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginLeft: -0.5,
  marginRight: -0.5,
  width: 574,
}

export const buttonItem: SxProps = {
  p: 0.5,
}

export const letterButton: SxProps = {
  fontSize: 24,
  fontWeight: 'bold',
  height: BUTTON_HEIGHT,
  width: BUTTON_WIDTH,
}

export const emptyLetter: SxProps = {
  backgroundColor: '#f5f5f5',
  border: '1px solid #e9e9e9',
  borderRadius: '4px',
  height: BUTTON_HEIGHT,
  width: BUTTON_WIDTH,
}
