import { Grid } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'

import { RebusCard } from '../../../../components/app/rebuses'
import { PageHeader, PageTitle } from '../../../../components/app/ui'
import { selectRebuses } from '../../../../core/store/games/selectors'
import type { Rebus } from '../../../../core/types/models/rebus'
import rebusesData from '../../../../data/rebuses.json'
import { MainLayout } from '../../../../layouts'

const RebusesIndexPage: FC = () => {
  const rebuses = rebusesData as Rebus[]
  const rebusesState = useSelector(selectRebuses)

  return (
    <MainLayout>
      <PageHeader left={<PageTitle title="Ребусы" />} showBackButton />
      <Grid spacing={2} container>
        {rebuses.map((rebus) => (
          <RebusCard key={rebus.id} gameProcess={rebusesState[rebus.id]} rebus={rebus} />
        ))}
      </Grid>
    </MainLayout>
  )
}

export default RebusesIndexPage
