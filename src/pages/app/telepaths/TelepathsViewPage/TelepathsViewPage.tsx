import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GameReward } from '../../../../components/app/common/Game'
import { TelepathGame } from '../../../../components/app/games'
import { setCompleted } from '../../../../core/store/games/slice'
import { useAppDispatch } from '../../../../core/store/store'
import type { GameStatus } from '../../../../core/types/game'
import type { Telepath } from '../../../../core/types/models/telepaths'
import telepathsData from '../../../../data/telepaths.json'
import { MainLayout } from '../../../../layouts'

const telepaths = telepathsData as Telepath[]

const TelepathsViewPage: FC = () => {
  const dispatch = useAppDispatch()
  const { telepathId } = useParams()
  const telepath = telepaths.find((item) => item.id === Number(telepathId))
  const [gameStatus, setGameStatus] = useState<GameStatus>('process')
  const [executionTime, setExecutionTime] = useState<number>(0)

  if (!telepath) {
    return <>404</>
  }

  const onComplete = useCallback(
    (time: number): void => {
      setGameStatus('completed')
      setExecutionTime(time)
      dispatch(setCompleted({ id: telepath.id, reward: 50, time, type: 'telepath' }))
    },
    [dispatch, telepath.id]
  )

  const onFail = useCallback((): void => {
    setGameStatus('fail')
  }, [])

  return (
    <MainLayout>
      {gameStatus === 'process' && <TelepathGame onComplete={onComplete} onFail={onFail} telepath={telepath} />}
      {gameStatus === 'completed' && <GameReward time={executionTime} title={`Задание №${telepath.id}`} />}
      {gameStatus === 'fail' && <>Обосрались</>}
    </MainLayout>
  )
}

export default TelepathsViewPage
