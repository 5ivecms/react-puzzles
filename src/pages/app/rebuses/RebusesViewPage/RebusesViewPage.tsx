/* eslint-disable unicorn/consistent-function-scoping */
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GameReward } from '../../../../components/app/common/Game'
import { RebusGame } from '../../../../components/app/games'
import { openNextGame, setCompleted } from '../../../../core/store/games/slice'
import { useAppDispatch } from '../../../../core/store/store'
import type { GameStatus } from '../../../../core/types/game'
import type { Rebus } from '../../../../core/types/models/rebus'
import rebusesData from '../../../../data/rebuses.json'
import { MainLayout } from '../../../../layouts'

const rebuses = rebusesData as Rebus[]

const RebusesViewPage: FC = () => {
  const dispatch = useAppDispatch()
  const { rebusId } = useParams()
  const rebus = rebuses.find((item) => item.id === Number(rebusId))
  const [gameStatus, setGameStatus] = useState<GameStatus>('process')
  const [executionTime, setExecutionTime] = useState<number>(0)

  if (!rebus) {
    return <>404</>
  }

  const onComplete = useCallback(
    (time: number): void => {
      setGameStatus('completed')
      setExecutionTime(time)
      dispatch(setCompleted({ id: rebus.id, reward: 50, time, type: 'rebus' }))
      dispatch(openNextGame({ id: rebus.id, type: 'rebus' }))
    },
    [dispatch, rebus.id]
  )

  const onFail = useCallback((): void => {
    setGameStatus('fail')
  }, [])

  return (
    <MainLayout>
      {gameStatus === 'process' && <RebusGame onComplete={onComplete} onFail={onFail} rebus={rebus} />}
      {gameStatus === 'completed' && <GameReward time={executionTime} title={`Задание №${rebus.id}`} />}
      {gameStatus === 'fail' && <>Обосрались</>}
    </MainLayout>
  )
}

export default RebusesViewPage
