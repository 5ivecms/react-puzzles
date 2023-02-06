import { TipsAndUpdates } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import type { FC } from 'react'
import { useState } from 'react'

import { YELLOW } from '../../../../../../core/config/theme.config'
import type { Hint } from '../../types'

interface GameHintsProps {
  hints: Hint[]
}

const GameHints: FC<GameHintsProps> = ({ hints }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
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
      </Box>

      <Dialog onClose={() => setOpen(false)} open={open} fullWidth>
        <DialogTitle>Подсказки</DialogTitle>
        <DialogContent>
          <List>
            {hints.map(({ text, onClick }) => (
              <Box key={text}>
                <ListItem sx={{ p: 0 }}>
                  <ListItemButton
                    onClick={() => {
                      onClick()
                      setOpen(false)
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                <Divider component="li" />
              </Box>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="contained" autoFocus>
            Понятно
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default GameHints
