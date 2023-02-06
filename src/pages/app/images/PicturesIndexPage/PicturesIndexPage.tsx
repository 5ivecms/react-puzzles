import { Grid } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { GameCard } from '../../../../components/app/common'
import { PageHeader, PageTitle } from '../../../../components/app/ui'
import { appRoutes } from '../../../../core/config/routes.config'
import { selectPictures } from '../../../../core/store/games/selectors'
import type { Picture } from '../../../../core/types/models'
import picturesData from '../../../../data/pictures.json'
import { MainLayout } from '../../../../layouts'

const pictures = picturesData as Picture[]

const PicturesIndexPage: FC = () => {
  const navigate = useNavigate()
  const picturesState = useSelector(selectPictures)

  const toGame = (id: number): void => {
    navigate(appRoutes.pictures.view(Number(id)))
  }

  return (
    <MainLayout>
      <PageHeader left={<PageTitle title="Вооброжалка" />} showBackButton />
      <Grid spacing={2} container>
        {pictures.map((picture) => (
          <GameCard
            key={picture.id}
            game={picture}
            gameProcess={picturesState[picture.id]}
            toGame={() => toGame(picture.id)}
          />
        ))}
      </Grid>
    </MainLayout>
  )
}

export default PicturesIndexPage
