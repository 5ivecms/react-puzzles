import { Refresh } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import type { FC, ReactElement, ReactNode } from 'react'
import { useEffect, useRef } from 'react'

import type { Word } from '../../../../core/types/game'
import AnswerPalette from '../AnswerPalette/AnswerPalette'
import LettersPalette from '../LettersPalette/LettersPalette'
import GameHeader from './components/GameHeader/GameHeader'
import GameHints from './components/GameHints/GameHints'
import { useTimer } from './hooks'
import { controls, refreshIcon, timerSx } from './style.sx'
import type { Hint } from './types'
import { formatTime } from './utils'

interface GameProps {
  Question: ReactElement | ReactNode
  /* [3, '-', 4] - [кол-во букв, разделитель, кол-во букв] */
  answerTemplate?: (number | string)[]
  answerWords?: (Word | undefined)[]
  completed: boolean
  hints?: Hint[]
  leftControl?: ReactElement | ReactNode
  onAnswerWordClick?: (_: Word, index: number) => void
  onComplete: (time: number) => void
  onRefresh?: () => void
  onSuggestedWordClick?: (word: Word) => void
  play: boolean
  selectedWords?: Word[]
  title: string
  words?: Word[]
}

const Game: FC<GameProps> = ({
  Question,
  answerTemplate,
  answerWords,
  completed,
  hints,
  leftControl,
  onAnswerWordClick,
  onComplete,
  onRefresh,
  onSuggestedWordClick,
  play,
  title,
  words,
  selectedWords,
}) => {
  const { timer, handleStart, handlePause } = useTimer(0)
  const mounted = useRef<boolean>(false)

  useEffect(() => {
    if (!play) {
      handlePause()
    }

    if (mounted.current) {
      return
    }

    handleStart()
    mounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play])

  useEffect(() => {
    if (completed) {
      onComplete(timer)
    }
  }, [completed, timer, onComplete])

  return (
    <Box>
      <GameHeader title={title} />

      <Box sx={controls}>
        {leftControl !== undefined && leftControl}
        {onRefresh !== undefined && (
          <IconButton onClick={onRefresh}>
            <Refresh sx={refreshIcon} />
          </IconButton>
        )}
        <Typography sx={timerSx}>{formatTime(timer)}</Typography>
        {hints && <GameHints hints={hints} />}
      </Box>

      {Question}

      {answerWords && onAnswerWordClick !== undefined && (
        <AnswerPalette onClick={onAnswerWordClick} template={answerTemplate} words={answerWords} />
      )}

      {words && onSuggestedWordClick !== undefined && selectedWords !== undefined && (
        <LettersPalette onClick={onSuggestedWordClick} selected={selectedWords} words={words} />
      )}
    </Box>
  )
}

export default Game
