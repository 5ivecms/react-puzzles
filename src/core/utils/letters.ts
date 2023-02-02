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
  const wordsArr = [...words]

  while (wordsArr.length < length) {
    const randomLetterIndex = random(0, alphabetRu.length - 1)
    wordsArr.push(alphabetRu[randomLetterIndex])
  }

  return shuffle(wordsArr).reduce((acc: Word[], symbol, index) => [...acc, { index, locked: false, symbol }], [])
}
