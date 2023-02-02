/* eslint-disable no-console */
import random from 'lodash.random'
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

const getRandomWordToAnswer = (words: Word[], selected: Word[]): Word => {
  const selectedAnswerWords = new Set(selected.filter((w) => w.isAnswerWord).map(({ index }) => index))
  const freeAnswerWords = words.filter((word) => word.isAnswerWord && !selectedAnswerWords.has(word.index))

  const randomIndex = random(0, freeAnswerWords.length - 1)
  return freeAnswerWords[randomIndex]
}

const RebusGame: FC<RebusGameProps> = ({ rebus, onComplete, onFail }) => {
  const [play, setPlay] = useState<boolean>(true)
  const [completed, setCompleted] = useState<boolean>(false)
  const [answerWords, setAnswerWords] = useState<(Word | undefined)[]>(Array.from({ length: rebus.answer.length ?? 1 }))
  const words = useMemo(() => generateLettersPalette([...rebus.answer]), [rebus.answer])

  const selectedWords = (answerWords ?? []).filter((answerWord) => answerWord !== undefined) as Word[]

  const openRandomLetter = useCallback((): void => {
    const newWord = getRandomWordToAnswer(words, selectedWords)
    setAnswerWords((prev) => {
      const newWords = [...prev]
      newWords[newWord.index] = { ...newWord, locked: true }
      return newWords
    })
  }, [selectedWords, words])

  const hints: Hint[] = useMemo(
    () => [
      {
        onClick: openRandomLetter,
        text: 'Открыть 1 букву',
      },
      {
        onClick: () => setCompleted(true),
        text: 'Досрочно пройти задание',
      },
    ],
    [setCompleted, openRandomLetter]
  )

  const handleAnswerLetterClick = useCallback((_: Word, index: number): void => {
    setAnswerWords((prev) => prev.map((prevWord, idx) => (index === idx ? undefined : prevWord)))
  }, [])

  const handleSuggestedWordClick = useCallback((word: Word): void => {
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
  }, [])

  const isCorrectAnswer = useCallback((): boolean => {
    const currentAnswer = answerWords
      .reduce((acc: Word[], answerWord) => (answerWord === undefined ? acc : [...acc, answerWord]), [])
      .map(({ symbol }) => symbol)
      .join('')

    return currentAnswer === rebus.answer
  }, [answerWords, rebus.answer])

  useEffect(() => {
    if (selectedWords.length === 0 || selectedWords.length !== rebus.answer.length) {
      return
    }

    setPlay(false)

    if (isCorrectAnswer()) {
      setCompleted(true)
      return
    }

    onFail()
  }, [isCorrectAnswer, rebus.answer.length, onFail, selectedWords])

  return (
    <Game
      Question={<GameImage src={rebus.image} />}
      answerWords={answerWords}
      completed={completed}
      hints={hints}
      onAnswerWordClick={handleAnswerLetterClick}
      onComplete={onComplete}
      onSuggestedWordClick={handleSuggestedWordClick}
      play={play}
      selectedWords={selectedWords}
      title={`Задание №${rebus.id}`}
      words={words}
    />
  )
}

export default RebusGame
