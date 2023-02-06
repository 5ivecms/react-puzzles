/* eslint-disable no-console */
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import type { ChangeEvent, FC } from 'react'
import { useMemo, useRef, useState } from 'react'

import { useAppDispatch } from '../../../../core/store/store'
import type { Telepath } from '../../../../core/types/models/telepaths'
import Game from '../../common/Game/Game'
import type { Hint } from '../../common/Game/types'

type LogText = {
  hasSymbol: boolean
  text: string
}

interface TelepathGameProps {
  onComplete: (time: number) => void
  onFail: () => void
  telepath: Telepath
}

const TelepathGame: FC<TelepathGameProps> = ({ telepath, onComplete, onFail }) => {
  const dispatch = useAppDispatch()
  const [text, setText] = useState<string>('')
  const [log, setLog] = useState<LogText[]>([])
  const [showLogDialog, setShowLogDialog] = useState<boolean>(false)
  const [showAnswerDialog, setShowAnswerDialog] = useState<boolean>(false)
  const [play, setPlay] = useState<boolean>(true)
  const [completed, setCompleted] = useState<boolean>(false)

  const answerDialogTextRef = useRef<string>('')

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
    const isExistText = log.find((item) => item.text === text)
    if (isExistText !== undefined) {
      return
    }

    if (text.includes(telepath.answer)) {
      setLog((prev) => [...prev, { hasSymbol: true, text }])
      answerDialogTextRef.current = 'Содержит букву'
    } else {
      setLog((prev) => [...prev, { hasSymbol: false, text }])
      answerDialogTextRef.current = 'Не содержит букву'
    }

    setShowAnswerDialog(true)
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
        leftControl={
          <IconButton onClick={() => setShowLogDialog(true)}>
            <MenuIcon sx={{ height: 40, width: 40 }} />
          </IconButton>
        }
        onComplete={onComplete}
        play={play}
        title={`Задание №${telepath.id}`}
      />

      <Dialog onClose={() => setShowAnswerDialog(false)} open={showAnswerDialog}>
        <DialogTitle>Результат</DialogTitle>
        <DialogContent>
          <Typography fontWeight="bold" variant="h5">
            {text}
          </Typography>
          {answerDialogTextRef.current}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowAnswerDialog(false)} variant="contained" autoFocus>
            Ок
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog onClose={() => setShowLogDialog(false)} open={showLogDialog}>
        <DialogTitle>Результаты проверки</DialogTitle>
        <DialogContent>
          {log.map((item) => (
            <Box key={item.text} sx={{ marginBottom: 3 }}>
              <Typography fontWeight="bold" variant="h5">
                {item.text}
              </Typography>
              <Typography>{item.hasSymbol ? 'Содержит букву' : 'Не содержит букву'}</Typography>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowLogDialog(false)} variant="contained" autoFocus>
            Ок
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TelepathGame
