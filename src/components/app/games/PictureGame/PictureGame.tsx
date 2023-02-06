import type { FC } from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { minusDiamonds } from '../../../../core/store/diamonds/slice'
import { useAppDispatch } from '../../../../core/store/store'
import type { Word } from '../../../../core/types/game'
import type { Picture } from '../../../../core/types/models'
import { generateLettersPalette, getRandomWordForAnswer } from '../../../../core/utils/letters'
import Game from '../../common/Game/Game'
import type { Hint } from '../../common/Game/types'
import PictureImagesList from './PictureImagesList'

interface PictureGameProps {
  onComplete: (time: number) => void
  onFail: () => void
  picture: Picture
}

const PictureGame: FC<PictureGameProps> = ({ onComplete, onFail, picture }) => {
  const dispatch = useAppDispatch()
  const [play, setPlay] = useState<boolean>(true)
  const [completed, setCompleted] = useState<boolean>(false)
  const [displayedImages, setDisplayedImages] = useState<number>(2)
  const [answerWords, setAnswerWords] = useState<(Word | undefined)[]>(
    Array.from({ length: picture.answer.length ?? 1 })
  )
  const words = useMemo(() => generateLettersPalette([...picture.answer]), [picture.answer])

  const selectedWords = (answerWords ?? []).filter((answerWord) => answerWord !== undefined) as Word[]

  const openRandomLetter = useCallback((): void => {
    const newWord = getRandomWordForAnswer(words, selectedWords)
    setAnswerWords((prev) => {
      const newWords = [...prev]
      newWords[newWord.index] = { ...newWord, locked: true }
      return newWords
    })
  }, [selectedWords, words])

  const hints: Hint[] = useMemo(
    () => [
      {
        onClick: () => {
          openRandomLetter()
          dispatch(minusDiamonds({ count: 10 }))
        },
        text: 'Открыть 1 букву',
      },
      {
        onClick: () => setCompleted(true),
        text: 'Досрочно пройти задание',
      },
      {
        onClick: () => setDisplayedImages(3),
        text: 'Показать картинку №3',
      },
    ],
    [setCompleted, openRandomLetter, dispatch]
  )

  const handleRefresh = (): void => {
    setAnswerWords((prev) => prev.map((word) => (word?.locked ? word : undefined)))
  }

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

    return currentAnswer === picture.answer
  }, [answerWords, picture.answer])

  useEffect(() => {
    if (selectedWords.length === 0 || selectedWords.length !== picture.answer.length) {
      return
    }

    setPlay(false)

    if (isCorrectAnswer()) {
      setCompleted(true)
      return
    }

    onFail()
  }, [isCorrectAnswer, picture.answer.length, onFail, selectedWords])

  return (
    <Game
      Question={<PictureImagesList displayedImages={displayedImages} images={picture.images} />}
      answerWords={answerWords}
      completed={completed}
      hints={hints}
      onAnswerWordClick={handleAnswerLetterClick}
      onComplete={onComplete}
      onRefresh={handleRefresh}
      onSuggestedWordClick={handleSuggestedWordClick}
      play={play}
      selectedWords={selectedWords}
      title={`Задание №${picture.id}`}
      words={words}
    />
  )
}

export default PictureGame
