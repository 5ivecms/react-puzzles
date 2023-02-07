import type { SxProps } from '@mui/material'

import { theme, XSS_MEDIA_QUERY } from '../../../../core/config/theme.config'

export const styles: Record<string, SxProps> = {
  answerPaletteContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 151px)',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 130px)',
    },
  },
  bottom: {
    backgroundColor: '#fff',
    bottom: 0,
    boxShadow: '0 0 10px 0px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center ',
    left: 0,
    position: 'fixed',
    py: 1.5,
    right: 0,
    [theme.breakpoints.down('sm')]: {
      py: 1,
    },
  },
  content: {
    [XSS_MEDIA_QUERY]: {
      pb: '116px',
    },
    flex: 1,
    pb: '148px',
  },
  controls: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionContainer: {
    display: 'flex',
    justifyContent: 'center',
    pb: 3,
    pt: 3,
    [theme.breakpoints.down('sm')]: {
      pb: 1.5,
      pt: 1.5,
    },
  },
  refreshIcon: {
    height: 50,
    width: 50,
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 40,
    },
  },
  timer: {
    fontSize: 28,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
}
