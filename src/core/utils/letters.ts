import random from 'lodash.random'
import shuffle from 'lodash.shuffle'

import type { Word } from '../types/game'

export const alphabetRu = [
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ь',
  'ы',
  'ъ',
  'э',
  'ю',
  'я',
]
export const generateLettersPalette = (words: string[] = [], length = 14): Word[] => {
  let index = 0
  const wordsArr: Word[] = []
  words.forEach((symbol) => {
    wordsArr.push({ index, isAnswerWord: true, locked: false, symbol })
    index += 1
  })

  while (wordsArr.length < length) {
    const randomLetterIndex = random(0, alphabetRu.length - 1)
    wordsArr.push({ index, isAnswerWord: false, locked: false, symbol: alphabetRu[randomLetterIndex] })
    index += 1
  }

  return shuffle(wordsArr)
}

export const getRandomWordForAnswer = (words: Word[], selected: Word[]): Word => {
  const selectedAnswerWords = new Set(selected.filter((w) => w.isAnswerWord).map(({ index }) => index))
  const freeAnswerWords = words.filter((word) => word.isAnswerWord && !selectedAnswerWords.has(word.index))

  const randomIndex = random(0, freeAnswerWords.length - 1)
  return freeAnswerWords[randomIndex]
}
