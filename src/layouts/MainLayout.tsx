import { Box, Container } from '@mui/material'
import type { FC, ReactNode } from 'react'

import { Header } from '../components/app/ui'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ background: '#fff', minHeight: '100vh', overflow: 'hidden' }} disableGutters>
      <Header />
      <Box sx={{ pb: 2, pl: 2, pr: 2 }}>{children}</Box>
    </Container>
  )
}

export default MainLayout
