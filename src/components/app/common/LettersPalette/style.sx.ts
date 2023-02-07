import type { SxProps } from '@mui/material'

import { XSS_MEDIA_QUERY, XXS_MEDIA_QUERY } from '../../../../core/config/theme.config'

const BUTTON_WIDTH = 74
const BUTTON_HEIGHT = 74

export const buttonsContainer: SxProps = {
  [XSS_MEDIA_QUERY]: {
    ml: 0,
    mr: 0,
    width: 350,
  },
  [XXS_MEDIA_QUERY]: {
    width: 294,
  },
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginLeft: -0.5,
  marginRight: -0.5,
  width: {
    lg: 574,
    md: 574,
    sm: 434,
    xs: 434,
  },
}

export const buttonItem: SxProps = {
  [XSS_MEDIA_QUERY]: {
    p: 0.25,
  },
  p: 0.5,
}

export const letterButton: SxProps = {
  [XSS_MEDIA_QUERY]: {
    height: 46,
    width: 46,
  },
  [XXS_MEDIA_QUERY]: {
    height: 38,
    width: 38,
  },
  fontSize: 24,
  fontWeight: 'bold',
  height: {
    lg: BUTTON_HEIGHT,
    md: BUTTON_HEIGHT,
    sm: 54,
    xs: 54,
  },
  minWidth: 'initial',
  width: {
    lg: BUTTON_WIDTH,
    md: BUTTON_WIDTH,
    sm: 54,
    xs: 54,
  },
}

export const emptyLetter: SxProps = {
  [XSS_MEDIA_QUERY]: {
    height: 46,
    width: 46,
  },
  [XXS_MEDIA_QUERY]: {
    height: 38,
    width: 38,
  },
  backgroundColor: '#f5f5f5',
  border: '1px solid #e9e9e9',
  borderRadius: '4px',
  height: {
    lg: BUTTON_HEIGHT,
    md: BUTTON_HEIGHT,
    sm: 54,
    xs: 54,
  },
  width: {
    lg: BUTTON_WIDTH,
    md: BUTTON_WIDTH,
    sm: 54,
    xs: 54,
  },
}
