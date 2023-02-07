import { Diamond, TipsAndUpdates } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import type { FC } from 'react'
import { useState } from 'react'

import { DIAMOND_COLOR } from '../../../../../../core/config/theme.config'
import type { Hint } from '../../types'
import { hintIcon, listItem } from './style.sx'

interface GameHintsProps {
  hints: Hint[]
}

const GameHints: FC<GameHintsProps> = ({ hints }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <IconButton color="info" onClick={() => setOpen(true)}>
        <TipsAndUpdates sx={hintIcon} />
      </IconButton>

      <Dialog onClose={() => setOpen(false)} open={open} fullWidth>
        <DialogTitle>Подсказки</DialogTitle>
        <DialogContent>
          <List>
            {hints.map(({ text, price, onClick }) => (
              <Box key={text}>
                <ListItem sx={listItem}>
                  <ListItemButton
                    onClick={() => {
                      onClick()
                      setOpen(false)
                    }}
                  >
                    <ListItemText primary={text} />
                    <Box sx={{ alignContent: 'center', display: 'flex' }}>
                      <Diamond sx={{ color: DIAMOND_COLOR, height: 24, mr: 0.5, width: 24 }} />
                      <Typography fontWeight="bold">{price}</Typography>
                    </Box>
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
