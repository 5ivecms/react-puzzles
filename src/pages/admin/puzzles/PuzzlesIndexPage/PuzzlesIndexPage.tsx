import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { PageHeader, PageTitle } from '../../../../components/admin/ui'
import { adminRoutes } from '../../../../core/config/routes.config'
import { AdminLayout } from '../../../../layouts'

const PuzzlesIndexPage: FC = () => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Ребусы" />}
        right={
          <Button component={Link} endIcon={<Add />} to={adminRoutes.puzzles.create()} variant="contained">
            Добавить
          </Button>
        }
      />
    </AdminLayout>
  )
}

export default PuzzlesIndexPage
