import type { SxProps } from '@mui/material'

import { YELLOW } from '../../../../core/config/theme.config'

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
  },
  reward: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  rewardIcon: {
    color: YELLOW,
    marginRight: 0.5,
  },
  successIcon: {
    left: 10,
    position: 'absolute',
    top: 10,
  },
}
