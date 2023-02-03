import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GameReward } from '../../../../components/app/common/Game'
import { CharadeGame } from '../../../../components/app/games'
import { setCompleted } from '../../../../core/store/games/slice'
import { useAppDispatch } from '../../../../core/store/store'
import type { GameStatus } from '../../../../core/types/game'
import type { Charade } from '../../../../core/types/models'
import charadesData from '../../../../data/charades.json'
import { MainLayout } from '../../../../layouts'

const charades = charadesData as Charade[]

const CharadesViewPage: FC = () => {
  const dispatch = useAppDispatch()
  const { charadeId } = useParams()
  const charade = charades.find((item) => item.id === Number(charadeId))
  const [gameStatus, setGameStatus] = useState<GameStatus>('process')
  const [executionTime, setExecutionTime] = useState<number>(0)

  if (!charade) {
    return <>404</>
  }

  const onComplete = useCallback(
    (time: number): void => {
      setGameStatus('completed')
      setExecutionTime(time)
      dispatch(setCompleted({ id: charade.id, reward: 50, time, type: 'charade' }))
    },
    [dispatch, charade.id]
  )

  const onFail = useCallback((): void => {
    setGameStatus('fail')
  }, [])

  return (
    <MainLayout>
      {gameStatus === 'process' && <CharadeGame charade={charade} onComplete={onComplete} onFail={onFail} />}
      {gameStatus === 'completed' && <GameReward time={executionTime} title={`Задание №${charade.id}`} />}
      {gameStatus === 'fail' && <>Обосрались</>}
    </MainLayout>
  )
}

export default CharadesViewPage
