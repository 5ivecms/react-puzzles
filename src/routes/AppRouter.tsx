import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { adminRoutes, appRoutes, baseBrowseRoutes } from '../core/config/routes.config'
import { HomePage, NotFoundPage } from '../pages/admin/main'
import { PuzzlesCreatePage, PuzzlesIndexPage } from '../pages/admin/puzzles'
import { CharadesIndexPage, CharadesViewPage } from '../pages/app/charades'
import { PicturesIndexPage, PicturesViewPage } from '../pages/app/images'
import { DiamondsPage, IndexPage, PromoPage, TitlesPage } from '../pages/app/main'
import { RebusesIndexPage, RebusesViewPage } from '../pages/app/rebuses'
import { RiddlesIndexPage, RiddlesViewPage } from '../pages/app/riddles'
import { TelepathsIndexPage, TelepathsViewPage } from '../pages/app/telepaths'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<IndexPage />} path={baseBrowseRoutes.index()} />
      <Route element={<TitlesPage />} path={baseBrowseRoutes.titles()} />
      <Route element={<DiamondsPage />} path={baseBrowseRoutes.diamonds()} />
      <Route element={<PromoPage />} path={baseBrowseRoutes.promo()} />

      <Route element={<RebusesIndexPage />} path={appRoutes.rebuses.index()} />
      <Route element={<RebusesViewPage />} path={appRoutes.rebuses.view()} />

      <Route element={<RiddlesIndexPage />} path={appRoutes.riddles.index()} />
      <Route element={<RiddlesViewPage />} path={appRoutes.riddles.view()} />

      <Route element={<CharadesIndexPage />} path={appRoutes.charades.index()} />
      <Route element={<CharadesViewPage />} path={appRoutes.charades.view()} />

      <Route element={<PicturesIndexPage />} path={appRoutes.pictures.index()} />
      <Route element={<PicturesViewPage />} path={appRoutes.pictures.view()} />

      <Route element={<TelepathsIndexPage />} path={appRoutes.telepaths.index()} />
      <Route element={<TelepathsViewPage />} path={appRoutes.telepaths.view()} />

      <Route element={<HomePage />} path={adminRoutes.main.home()} />

      <Route element={<PuzzlesIndexPage />} path={adminRoutes.puzzles.index()} />
      <Route element={<PuzzlesCreatePage />} path={adminRoutes.puzzles.create()} />

      <Route element={<NotFoundPage />} path={baseBrowseRoutes.notFound()} />
    </Routes>
  )
}

export default AppRouter
