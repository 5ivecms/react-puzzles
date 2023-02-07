import { Typography } from '@mui/material'
import type { FC } from 'react'

import { pageTitle } from './style.sx'

interface PageTitleProps {
  title: string
}

const PageTitle: FC<PageTitleProps> = ({ title }) => (
  <Typography component="h1" sx={pageTitle} variant="h4">
    {title}
  </Typography>
)

export default PageTitle
