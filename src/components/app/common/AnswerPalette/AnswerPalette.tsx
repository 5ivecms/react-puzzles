import { Box } from '@mui/material'
import type { FC } from 'react'

import type { Word } from '../../../../core/types/game'
import { buttonItem, buttonsContainer, emptyLetter, letterButton, wordsSeparator } from './style.sx'

interface WordElementProps {
  index: number
  onClick: (word: Word, index: number) => void
  word: Word | undefined
}

const WordElement: FC<WordElementProps> = ({ index, onClick, word }) => (
  <Box sx={buttonItem}>
    {word === undefined ? (
      <Box sx={emptyLetter} />
    ) : (
      <Box onClick={() => onClick(word, index)} sx={letterButton}>
        {word.symbol}
      </Box>
    )}
  </Box>
)

interface AnswerPaletteProps {
  onClick: (word: Word, index: number) => void
  // [3, '-', 4] - [кол-во букв, разделитель, кол-во букв]
  template?: (number | string)[]
  words: (Word | undefined)[]
}

const AnswerPalette: FC<AnswerPaletteProps> = ({ words, template, onClick }) => {
  if (template === undefined) {
    return (
      <Box sx={buttonsContainer}>
        {words.map((word, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <WordElement key={`answer-word-${index}`} index={index} onClick={onClick} word={word} />
        })}
      </Box>
    )
  }

  let countWords = 0

  return (
    <Box sx={buttonsContainer}>
      {template.map((t) => {
        return typeof t === 'string' ? (
          <Box sx={wordsSeparator}>{t}</Box>
        ) : (
          <>
            {words.slice(countWords, t + countWords).map((word) => {
              countWords += 1
              return (
                <WordElement key={`answer-word-${countWords}`} index={countWords - 1} onClick={onClick} word={word} />
              )
            })}
          </>
        )
      })}
    </Box>
  )
}

export default AnswerPalette
