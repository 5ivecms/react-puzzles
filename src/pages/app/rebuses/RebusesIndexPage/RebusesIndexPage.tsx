import { Grid } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { GameCard } from '../../../../components/app/common'
import { PageHeader, PageTitle } from '../../../../components/app/ui'
import { appRoutes } from '../../../../core/config/routes.config'
import { selectRebuses } from '../../../../core/store/games/selectors'
import type { Rebus } from '../../../../core/types/models/rebus'
import rebusesData from '../../../../data/rebuses.json'
import { MainLayout } from '../../../../layouts'

const RebusesIndexPage: FC = () => {
  const navigate = useNavigate()
  const rebuses = rebusesData as Rebus[]
  const rebusesState = useSelector(selectRebuses)

  const toGame = (id: number): void => {
    navigate(appRoutes.rebuses.view(Number(id)))
  }

  return (
    <MainLayout>
      <PageHeader left={<PageTitle title="Ребусы" />} showBackButton />
      <Grid spacing={2} container>
        {rebuses.map((rebus) => (
          <GameCard key={rebus.id} game={rebus} gameProcess={rebusesState[rebus.id]} toGame={() => toGame(rebus.id)} />
        ))}
      </Grid>
    </MainLayout>
  )
}

export default RebusesIndexPage
