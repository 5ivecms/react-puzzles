import { Grid } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { GameCard } from '../../../../components/app/common'
import { PageHeader, PageTitle } from '../../../../components/app/ui'
import { appRoutes } from '../../../../core/config/routes.config'
import { selectTelepaths } from '../../../../core/store/games/selectors'
import type { Telepath } from '../../../../core/types/models/telepaths'
import telepathsData from '../../../../data/telepaths.json'
import { MainLayout } from '../../../../layouts'

const telepaths = telepathsData as Telepath[]

const TelepathsIndexPage: FC = () => {
  const navigate = useNavigate()
  const telepathsState = useSelector(selectTelepaths)

  const toGame = (id: number): void => {
    navigate(appRoutes.telepaths.view(Number(id)))
  }

  return (
    <MainLayout>
      <PageHeader left={<PageTitle title="Телепат" />} showBackButton />
      <Grid spacing={2} container>
        {telepaths.map((telepath) => (
          <GameCard
            key={telepath.id}
            game={telepath}
            gameProcess={telepathsState[telepath.id]}
            toGame={() => toGame(telepath.id)}
          />
        ))}
      </Grid>
    </MainLayout>
  )
}

export default TelepathsIndexPage
