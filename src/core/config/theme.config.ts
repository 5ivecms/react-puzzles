import { createTheme } from '@mui/material'

export const YELLOW = '#f9c300'

export const XSS_BREAKPOINT = 480
export const XSS_MEDIA_QUERY = `@media (max-width: ${XSS_BREAKPOINT}px)`

export const XXS_BREAKPOINT = 359
export const XXS_MEDIA_QUERY = `@media (max-width: ${XXS_BREAKPOINT}px)`

export const theme = createTheme({
  palette: {
    background: {
      default: '#e7e7e7',
    },
  },
})
