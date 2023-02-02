import { Box } from '@mui/material'
import type { FC, ReactElement, ReactNode } from 'react'
import { useEffect } from 'react'

import type { Word } from '../../../../core/types/game'
import AnswerPalette from '../AnswerPalette/AnswerPalette'
import LettersPalette from '../LettersPalette/LettersPalette'
import GameHeader from './components/GameHeader/GameHeader'
import GameHints from './components/GameHints/GameHints'
import { useTimer } from './hooks'
import type { Hint } from './types'
import { formatTime } from './utils'

interface GameProps {
  Question: ReactElement | ReactNode
  /* [3, '-', 4] - [кол-во букв, разделитель, кол-во букв] */
  answerTemplate?: (number | string)[]
  answerWords?: (Word | undefined)[]
  hints?: Hint[]
  onSuggestedWordClick?: (word: Word) => void
  play: boolean
  title: string
  words?: Word[]
}

const Game: FC<GameProps> = ({
  play,
  title,
  answerWords,
  Question,
  words,
  answerTemplate,
  hints,
  onSuggestedWordClick,
}) => {
  const { timer, handleStart, handlePause } = useTimer(0)

  const handleAnswerLetterClick = (_: Word, index: number): void => {
    setAnswerWords((prev) => prev.map((prevWord, idx) => (index === idx ? undefined : prevWord)))
  }

  useEffect(() => {
    if (play) {
      handleStart()
      return
    }

    handlePause()
  }, [handleStart, handlePause, play])

  return (
    <Box>
      <GameHeader title={title} />
      <div>
        {hints && <GameHints hints={hints} />}
        <p>{formatTime(timer)}</p>
      </div>
      {Question}
      {answerWords && <AnswerPalette onClick={handleAnswerLetterClick} template={answerTemplate} words={answerWords} />}
      {words && onSuggestedWordClick !== undefined && (
        <LettersPalette onClick={onSuggestedWordClick} selected={selectedLetters} words={words} />
      )}
    </Box>
  )
}

export default Game
