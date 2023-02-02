import { Grid } from '@mui/material'
import type { FC } from 'react'

import { PageHeader, PageTitle } from '../../../../components/app/ui'
import { MainLayout } from '../../../../layouts'

const RiddlesIndexPage: FC = () => {
  return (
    <MainLayout>
      <PageHeader left={<PageTitle title="Загадки" />} showBackButton />
      <Grid spacing={2} container>
        Список загадок
      </Grid>
    </MainLayout>
  )
}

export default RiddlesIndexPage
