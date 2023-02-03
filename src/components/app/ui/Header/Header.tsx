import { Diamond, Extension } from '@mui/icons-material'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { baseBrowseRoutes } from '../../../../core/config/routes.config'
import { headerMenu } from './header.data'
import { linkMenu, linksContainer, logoIcon, logoText, toolbar } from './style.sx'

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={toolbar} disableGutters>
          <Extension sx={logoIcon} />
          <Typography component={Link} sx={logoText} to={baseBrowseRoutes.index()} variant="h6" noWrap>
            Загадки и пазлы
          </Typography>
          <Box sx={linksContainer}>
            {headerMenu.map((item) => (
              <Button key={item.url} component={Link} sx={linkMenu} to={item.url}>
                {item.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row', mr: 2 }}>
              <Diamond sx={{ height: 26, mr: 0.5, width: 26 }} />
              <Typography>0</Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
