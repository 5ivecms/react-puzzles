import { Extension } from '@mui/icons-material'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectDiamondsCount } from '../../../../core/store/diamonds/selectors'
import { headerMenu } from './header.data'
import { headerTitle, linkMenu, linksContainer, logoIcon, toolbar, topHeader } from './style.sx'

const Header: FC = () => {
  const diamonds = useSelector(selectDiamondsCount)

  return (
    <Container maxWidth="md" disableGutters>
      <Box sx={topHeader}>
        <Extension sx={logoIcon} />
        <Typography sx={headerTitle}>Загадки и пазлы</Typography>
      </Box>
      <AppBar position="static" sx={{ pl: 3, pr: 3 }}>
        <Toolbar sx={toolbar} disableGutters>
          <Box sx={linksContainer}>
            {headerMenu.map((item) => (
              <Button key={item.url} component={Link} sx={linkMenu} to={item.url}>
                {item.title}
              </Button>
            ))}
          </Box>
          {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row', mr: 2 }}>
              <Diamond sx={{ height: 26, mr: 0.5, width: 26 }} />
              <Typography fontWeight="bold">{diamonds}</Typography>
            </Box>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
