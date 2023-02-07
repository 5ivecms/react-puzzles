import type { SxProps } from '@mui/material'

import { theme, YELLOW } from '../../../../core/config/theme.config'

export const styles: Record<string, SxProps> = {
  cardActions: { display: 'flex', justifyContent: 'center' },
  cardContent: {
    position: 'relative',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'center',
  },
  rebusNum: {
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    borderRadius: '500rem',
    color: '#555',
    display: 'flex',
    fontSize: 32,
    height: 80,
    justifyContent: 'center',
    width: 80,
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      height: 70,
      width: 70,
    },
  },
  reward: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  rewardIcon: {
    color: YELLOW,
    height: 30,
    mr: 1,
    [theme.breakpoints.down('sm')]: {
      height: 24,
      mr: 0.5,
      width: 24,
    },
    width: 30,
  },
  scores: {
    '@media (max-width: 700px)': {
      fontSize: '1.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  statusIcon: {
    left: 10,
    position: 'absolute',
    top: 10,
  },
}
