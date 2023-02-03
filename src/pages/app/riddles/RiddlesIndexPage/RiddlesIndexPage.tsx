import { Grid } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { GameCard } from '../../../../components/app/common'
import { PageHeader, PageTitle } from '../../../../components/app/ui'
import { appRoutes } from '../../../../core/config/routes.config'
import { selectRiddles } from '../../../../core/store/games/selectors'
import type { Riddle } from '../../../../core/types/models'
import riddlesData from '../../../../data/riddles.json'
import { MainLayout } from '../../../../layouts'

const riddles = riddlesData as Riddle[]

const RiddlesIndexPage: FC = () => {
  const navigate = useNavigate()
  const riddlesState = useSelector(selectRiddles)

  const toGame = (id: number): void => {
    navigate(appRoutes.riddles.view(Number(id)))
  }

  return (
    <MainLayout>
      <PageHeader left={<PageTitle title="Загадки" />} showBackButton />
      <Grid spacing={2} container>
        {riddles.map((riddle) => (
          <GameCard
            key={riddle.id}
            game={riddle}
            gameProcess={riddlesState[riddle.id]}
            toGame={() => toGame(riddle.id)}
          />
        ))}
      </Grid>
    </MainLayout>
  )
}

export default RiddlesIndexPage
