import { Box, Button } from '@mui/material'
import type { FC } from 'react'

import type { Word } from '../../../../core/types/game'
import { buttonItem, buttonsContainer, emptyLetter, letterButton } from './style.sx'

interface LettersPaletteProps {
  onClick: (letter: Word) => void
  selected: Word[]
  words: Word[]
}

const LettersPalette: FC<LettersPaletteProps> = ({ words, selected, onClick }) => {
  const selectedIndexes = new Set(selected.map(({ index }) => index))
  return (
    <Box sx={buttonsContainer}>
      {words.map((word) => (
        <Box key={word.index} sx={buttonItem}>
          {selectedIndexes.has(word.index) ? (
            <Box sx={emptyLetter} />
          ) : (
            <Button onClick={() => onClick(word)} sx={letterButton} variant="outlined">
              {word.symbol.trim()}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default LettersPalette
