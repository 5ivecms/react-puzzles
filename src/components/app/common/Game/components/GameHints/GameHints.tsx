import { TipsAndUpdates } from '@mui/icons-material'
import type { SxProps } from '@mui/material'
import { Backdrop, Box } from '@mui/material'
import type { FC } from 'react'
import { useState } from 'react'

import { YELLOW } from '../../../../../../core/config/theme.config'
import type { Hint } from '../../types'

interface GameHintsProps {
  hints: Hint[]
}

const GameHints: FC<GameHintsProps> = ({ hints }) => {
  const [open, setOpen] = useState<boolean>(false)

  let hintBoxStyle: SxProps = {
    backgroundColor: '#fff',
    left: -9999,
    position: 'absolute',
    top: -9999,
    visibility: 'hidden',
  }
  if (open) {
    hintBoxStyle = {
      ...hintBoxStyle,
      left: 0,
      top: 0,
      visibility: 'visible',
    }
  }

  return (
    <div>
      <Box sx={{ position: 'relative', zIndex: (theme) => theme.zIndex.drawer + 2 }}>
        <TipsAndUpdates
          onClick={() => setOpen(true)}
          sx={{
            color: YELLOW,
            cursor: 'pointer',
            height: 50,
            position: 'relative',
            width: 50,
            zIndex: open ? 2 : 1,
          }}
        />
        <Box sx={hintBoxStyle}>
          <Box>
            {hints.map(({ text, onClick }) => (
              <Box key={text} onClick={onClick} sx={{ cursor: 'pointer', p: 3 }}>
                {text}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Backdrop
        onClick={() => setOpen(false)}
        open={open}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      />
    </div>
  )
}

export default GameHints
