/* eslint-disable no-console */
import { Grid } from '@mui/material'
import type { FC } from 'react'

import { GameCategory } from '../../../../components/app/common'
import { PageHeader, PageTitle } from '../../../../components/app/ui'
import type { GameCategory as GameCategoryType } from '../../../../core/types/game'
import gameCategoryData from '../../../../data/game-categories.json'
import { MainLayout } from '../../../../layouts'

const IndexPage: FC = () => {
  const categories = gameCategoryData as GameCategoryType[]

  return (
    <MainLayout>
      <PageHeader left={<PageTitle title="Выберите чемпионат" />} />
      <Grid spacing={2} container>
        {categories.map((category) => (
          <GameCategory key={category.url} category={category} />
        ))}
      </Grid>
    </MainLayout>
  )
}

export default IndexPage
