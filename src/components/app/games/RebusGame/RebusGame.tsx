/* eslint-disable no-console */
import type { FC } from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import type { Word } from '../../../../core/types/game'
import type { Rebus } from '../../../../core/types/models/rebus'
import { generateLettersPalette } from '../../../../core/utils/letters'
import { GameImage } from '../../common/Game'
import Game from '../../common/Game/Game'
import type { Hint } from '../../common/Game/types'

interface RebusGameProps {
  onComplete: (time: number) => void
  onFail: () => void
  rebus: Rebus
}

const RebusGame: FC<RebusGameProps> = ({ rebus, onComplete, onFail }) => {
  const [play, setPlay] = useState<boolean>(true)
  const [answerWords, setAnswerWords] = useState<(Word | undefined)[]>(Array.from({ length: rebus.answer.length ?? 1 }))
  const words = useMemo(() => generateLettersPalette([...rebus.answer]), [rebus.answer])

  const selectedLetters = (answerWords ?? []).filter((answerWord) => answerWord !== undefined) as Word[]

  const hints: Hint[] = [
    {
      onClick: () => {
        console.log('Открываем')
      },
      text: 'Открыть 1 букву',
    },
    {
      onClick: () => {
        console.log('Проходим')
      },
      text: 'Досрочно пройти задание',
    },
  ]

  const handleSuggestedWordClick = (word: Word): void => {
    let isAdded = false

    setAnswerWords((prev) =>
      prev.reduce((acc: (Word | undefined)[], item) => {
        if (!isAdded && item === undefined) {
          isAdded = true
          return [...acc, word]
        }
        return [...acc, item]
      }, [])
    )
  }

  const isCorrectAnswer = useCallback((): boolean => {
    const currentAnswer = answerWords
      .reduce((acc: Word[], answerWord) => (answerWord === undefined ? acc : [...acc, answerWord]), [])
      .map(({ symbol }) => symbol)
      .join('')

    return currentAnswer === rebus.answer
  }, [answerWords, rebus.answer])

  useEffect(() => {
    if (selectedLetters.length === 0 || selectedLetters.length !== rebus.answer.length) {
      return
    }

    setPlay(false)

    if (isCorrectAnswer()) {
      // onComplete(timer)
      return
    }

    onFail()
  }, [isCorrectAnswer, rebus.answer.length, onFail, selectedLetters])

  return (
    <Game
      Question={<GameImage src={rebus.image} />}
      answerWords={answerWords}
      hints={hints}
      onSuggestedWordClick={handleSuggestedWordClick}
      play={play}
      title={`Задание №${rebus.id}`}
      words={words}
    />
  )
}

export default RebusGame
