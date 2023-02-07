import type { SxProps } from '@mui/material'

import { theme, XSS_MEDIA_QUERY } from '../../../../core/config/theme.config'

export const topHeader: SxProps = {
  [XSS_MEDIA_QUERY]: {
    p: 1.5,
  },
  alignItems: 'center',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  pb: 2,
  pl: 3,
  pr: 3,
  pt: 2,
}

export const headerTitle: SxProps = {
  [XSS_MEDIA_QUERY]: {
    fontSize: 28,
  },

  fontSize: 32,
}

export const logoIcon: SxProps = {
  [XSS_MEDIA_QUERY]: {
    height: 40,
    mr: 1,
    width: 40,
  },
  color: '#feb547',
  height: 50,
  mr: 2,
  width: 50,
}

export const toolbar: SxProps = {
  justifyContent: 'start',
}

export const logoText: SxProps = {
  color: 'inherit',
  display: 'flex',
  fontFamily: 'monospace',
  fontWeight: 700,
  mr: 2,
  textDecoration: 'none',
}

export const linksContainer: SxProps = {
  display: 'flex',
  flexGrow: 1,
}

export const linkMenu: SxProps = {
  [XSS_MEDIA_QUERY]: {
    my: 0.5,
  },
  color: 'white',
  display: 'block',
  my: 2,
  [theme.breakpoints.down('sm')]: {
    my: 1,
  },
}
