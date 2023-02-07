import { Diamond } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import type { FC } from 'react'
import { useSelector } from 'react-redux'

import { DIAMOND_COLOR } from '../../../../core/config/theme.config'
import { selectDiamondsCount } from '../../../../core/store/diamonds/selectors'
import { MainLayout } from '../../../../layouts'

const DiamondsPage: FC = () => {
  const diamondsCount = useSelector(selectDiamondsCount)

  return (
    <MainLayout>
      <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: 3 }}>
        <Diamond sx={{ color: DIAMOND_COLOR, height: 70, width: 70 }} />
        <Typography>у вас</Typography>
        <Typography variant="h5">{diamondsCount} алмаз(ов)</Typography>
        <Typography>для покупки подсказок</Typography>
      </Box>
    </MainLayout>
  )
}

export default DiamondsPage
