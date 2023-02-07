import { Box, Container } from '@mui/material'
import type { FC, ReactNode } from 'react'

import { Header } from '../components/app/ui'
import { container, content } from './style.sx'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="md" sx={container} disableGutters>
      <Header />
      <Box sx={content}>{children}</Box>
    </Container>
  )
}

export default MainLayout
