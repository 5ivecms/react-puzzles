import { Grid } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { GameCard } from '../../../../components/app/common'
import { PageHeader, PageTitle } from '../../../../components/app/ui'
import { appRoutes } from '../../../../core/config/routes.config'
import { selectCharades } from '../../../../core/store/games/selectors'
import type { Charade } from '../../../../core/types/models'
import charadesData from '../../../../data/charades.json'
import { MainLayout } from '../../../../layouts'

const CharadesIndexPage: FC = () => {
  const navigate = useNavigate()
  const charades = charadesData as Charade[]
  const charadesState = useSelector(selectCharades)

  const toGame = (id: number): void => {
    navigate(appRoutes.charades.view(Number(id)))
  }

  return (
    <MainLayout>
      <PageHeader left={<PageTitle title="Шарады" />} showBackButton />
      <Grid spacing={2} container>
        {charades.map((charade) => (
          <GameCard
            key={charade.id}
            game={charade}
            gameProcess={charadesState[charade.id]}
            toGame={() => toGame(charade.id)}
          />
        ))}
      </Grid>
    </MainLayout>
  )
}

export default CharadesIndexPage
