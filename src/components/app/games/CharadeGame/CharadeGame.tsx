import type { FC } from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import type { Word } from '../../../../core/types/game'
import type { Charade } from '../../../../core/types/models'
import { generateLettersPalette, getRandomWordForAnswer } from '../../../../core/utils/letters'
import Game from '../../common/Game/Game'
import type { Hint } from '../../common/Game/types'

interface CharadeGameProps {
  charade: Charade
  onComplete: (time: number) => void
  onFail: () => void
}

const CharadeGame: FC<CharadeGameProps> = ({ charade, onComplete, onFail }) => {
  const answer = charade.answerWords.join('')
  const answerTemplate = charade.answerWords.reduce((acc: (number | string)[], item, index) => {
    if (charade.answerWords.length - 1 === index) {
      return [...acc, item.length]
    }
    return [...acc, item.length, '-']
  }, [])

  const [play, setPlay] = useState<boolean>(true)
  const [completed, setCompleted] = useState<boolean>(false)
  const [answerWords, setAnswerWords] = useState<(Word | undefined)[]>(Array.from({ length: answer.length ?? 1 }))
  const words = useMemo(() => generateLettersPalette([...answer]), [answer])

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

    return currentAnswer === answer
  }, [answerWords, answer])

  useEffect(() => {
    if (selectedWords.length === 0 || selectedWords.length !== answer.length) {
      return
    }

    setPlay(false)

    if (isCorrectAnswer()) {
      setCompleted(true)
      return
    }

    onFail()
  }, [isCorrectAnswer, answer.length, onFail, selectedWords])

  // eslint-disable-next-line no-console
  console.log(answerWords)

  return (
    <Game
      Question={
        <div>
          {charade.text.split('\r\n').map((text, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={`charade-text-row-${index}`} style={{ margin: 0 }}>
              {text}
            </p>
          ))}
        </div>
      }
      answerTemplate={answerTemplate}
      answerWords={answerWords}
      completed={completed}
      hints={hints}
      onAnswerWordClick={handleAnswerLetterClick}
      onComplete={onComplete}
      onRefresh={handleRefresh}
      onSuggestedWordClick={handleSuggestedWordClick}
      play={play}
      selectedWords={selectedWords}
      title={`Задание №${charade.id}`}
      words={words}
    />
  )
}

export default CharadeGame
