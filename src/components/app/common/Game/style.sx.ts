import type { SxProps } from '@mui/material'

export const styles: Record<string, SxProps> = {
  answerPaletteContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 69px)',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'center ',
  },
  content: {
    flex: 1,
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
  },
  refreshIcon: {
    height: 50,
    width: 50,
  },
  timer: {
    fontSize: 28,
  },
}
