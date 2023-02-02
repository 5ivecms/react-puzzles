import type { FC } from 'react'

import { PageHeader, PageTitle } from '../../../../components/admin/ui'
import { AdminLayout } from '../../../../layouts'

const PuzzlesCreatePage: FC = () => {
  return (
    <AdminLayout>
      <PageHeader left={<PageTitle title="Добавить ребус" />} showBackButton />
    </AdminLayout>
  )
}

export default PuzzlesCreatePage
