import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { adminRoutes, appRoutes, baseBrowseRoutes } from '../core/config/routes.config'
import { HomePage, NotFoundPage } from '../pages/admin/main'
import { PuzzlesCreatePage, PuzzlesIndexPage } from '../pages/admin/puzzles'
import { CharadesIndexPage, CharadesViewPage } from '../pages/app/charades'
import { PicturesIndexPage, PicturesViewPage } from '../pages/app/images'
import { DiamondsPage, IndexPage, LoginPage, PromoPage, TitlesPage } from '../pages/app/main'
import { RebusesIndexPage, RebusesViewPage } from '../pages/app/rebuses'
import { RiddlesIndexPage, RiddlesViewPage } from '../pages/app/riddles'
import { TelepathsIndexPage, TelepathsViewPage } from '../pages/app/telepaths'
import PrivateRoute from './PrivateRoute'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path={adminRoutes.main.home()} />

      <Route element={<IndexPage />} path={baseBrowseRoutes.index()} />
      <Route element={<LoginPage />} path={baseBrowseRoutes.login()} />
      <Route element={<TitlesPage />} path={baseBrowseRoutes.titles()} />
      <Route element={<DiamondsPage />} path={baseBrowseRoutes.diamonds()} />
      <Route element={<PromoPage />} path={baseBrowseRoutes.promo()} />

      <Route element={<PrivateRoute component={RebusesIndexPage} />} path={appRoutes.rebuses.index()} />
      <Route element={<PrivateRoute component={RebusesViewPage} />} path={appRoutes.rebuses.view()} />

      <Route element={<PrivateRoute component={RiddlesIndexPage} />} path={appRoutes.riddles.index()} />
      <Route element={<PrivateRoute component={RiddlesViewPage} />} path={appRoutes.riddles.view()} />

      <Route element={<PrivateRoute component={CharadesIndexPage} />} path={appRoutes.charades.index()} />
      <Route element={<PrivateRoute component={CharadesViewPage} />} path={appRoutes.charades.view()} />

      <Route element={<PrivateRoute component={PicturesIndexPage} />} path={appRoutes.pictures.index()} />
      <Route element={<PrivateRoute component={PicturesViewPage} />} path={appRoutes.pictures.view()} />

      <Route element={<PrivateRoute component={TelepathsIndexPage} />} path={appRoutes.telepaths.index()} />
      <Route element={<PrivateRoute component={TelepathsViewPage} />} path={appRoutes.telepaths.view()} />

      <Route element={<PrivateRoute component={PuzzlesIndexPage} />} path={adminRoutes.puzzles.index()} />
      <Route element={<PrivateRoute component={PuzzlesCreatePage} />} path={adminRoutes.puzzles.create()} />

      <Route element={<NotFoundPage />} path={baseBrowseRoutes.notFound()} />
    </Routes>
  )
}

export default AppRouter
