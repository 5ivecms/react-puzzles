/* eslint-disable no-console */
import { Box, Button, TextField, Typography } from '@mui/material'
import type { ChangeEvent, FC } from 'react'
import { useMemo, useState } from 'react'

import { useAppDispatch } from '../../../../core/store/store'
import type { Telepath } from '../../../../core/types/models/telepaths'
import Game from '../../common/Game/Game'
import type { Hint } from '../../common/Game/types'

interface TelepathGameProps {
  onComplete: (time: number) => void
  onFail: () => void
  telepath: Telepath
}

const TelepathGame: FC<TelepathGameProps> = ({ telepath, onComplete, onFail }) => {
  const [text, setText] = useState<string>('')
  const [log, setLog] = useState<string[]>([])
  const dispatch = useAppDispatch()
  const [play, setPlay] = useState<boolean>(true)
  const [completed, setCompleted] = useState<boolean>(false)

  const hints: Hint[] = useMemo(
    () => [
      {
        onClick: () => setCompleted(true),
        text: 'Досрочно пройти задание',
      },
    ],
    [setCompleted]
  )

  const onInputText = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setText(value)
  }

  const handleCheck = (): void => {
    if (text.includes(telepath.answer)) {
      console.log('есть')
      return
    }

    console.log('нет')
  }

  return (
    <>
      <Game
        Question={
          <Box>
            <Typography>Введите слово чтобы узнать, есть ли в нем загаданная буква:</Typography>
            <Box>
              <TextField label="Слово" onChange={onInputText} placeholder="Слово" value={text} />
            </Box>
            <Button onClick={handleCheck} size="large" variant="contained">
              Проверить
            </Button>
          </Box>
        }
        completed={completed}
        hints={hints}
        onComplete={onComplete}
        play={play}
        title={`Задание №${telepath.id}`}
      />
    </>
  )
}

export default TelepathGame
