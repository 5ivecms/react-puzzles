import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { adminRoutes, appRoutes, baseBrowseRoutes } from '../core/config/routes.config'
import { HomePage, NotFoundPage } from '../pages/admin/main'
import { PuzzlesCreatePage, PuzzlesIndexPage } from '../pages/admin/puzzles'
import { IndexPage } from '../pages/app/main'
import { RebusesIndexPage, RebusesViewPage } from '../pages/app/rebuses'
import { RiddlesIndexPage, RiddlesViewPage } from '../pages/app/riddles'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<IndexPage />} path={baseBrowseRoutes.index()} />

      <Route element={<RebusesIndexPage />} path={appRoutes.rebuses.index()} />
      <Route element={<RebusesViewPage />} path={appRoutes.rebuses.view()} />

      <Route element={<RiddlesIndexPage />} path={appRoutes.riddles.index()} />
      <Route element={<RiddlesViewPage />} path={appRoutes.riddles.view()} />

      <Route element={<HomePage />} path={adminRoutes.main.home()} />

      <Route element={<PuzzlesIndexPage />} path={adminRoutes.puzzles.index()} />
      <Route element={<PuzzlesCreatePage />} path={adminRoutes.puzzles.create()} />

      <Route element={<NotFoundPage />} path={baseBrowseRoutes.notFound()} />
    </Routes>
  )
}

export default AppRouter
