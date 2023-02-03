import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GameReward } from '../../../../components/app/common/Game'
import { RiddleGame } from '../../../../components/app/games'
import { setCompleted } from '../../../../core/store/games/slice'
import { useAppDispatch } from '../../../../core/store/store'
import type { GameStatus } from '../../../../core/types/game'
import type { Riddle } from '../../../../core/types/models'
import riddlesData from '../../../../data/riddles.json'
import { MainLayout } from '../../../../layouts'

const riddles = riddlesData as Riddle[]

const RiddlesViewPage: FC = () => {
  const dispatch = useAppDispatch()
  const { riddleId } = useParams()
  const riddle = riddles.find((item) => item.id === Number(riddleId))
  const [gameStatus, setGameStatus] = useState<GameStatus>('process')
  const [executionTime, setExecutionTime] = useState<number>(0)

  if (!riddle) {
    return <>404</>
  }

  const onComplete = useCallback(
    (time: number): void => {
      setGameStatus('completed')
      setExecutionTime(time)
      dispatch(setCompleted({ id: riddle.id, reward: 50, time, type: 'riddle' }))
    },
    [dispatch, riddle.id]
  )

  const onFail = useCallback((): void => {
    setGameStatus('fail')
  }, [])

  return (
    <MainLayout>
      {gameStatus === 'process' && <RiddleGame onComplete={onComplete} onFail={onFail} riddle={riddle} />}
      {gameStatus === 'completed' && <GameReward time={executionTime} title={`Задание №${riddle.id}`} />}
      {gameStatus === 'fail' && <>Обосрались</>}
    </MainLayout>
  )
}

export default RiddlesViewPage
