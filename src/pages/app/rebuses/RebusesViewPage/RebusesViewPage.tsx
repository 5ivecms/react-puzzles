/* eslint-disable unicorn/consistent-function-scoping */
import type { FC } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { GameReward } from '../../../../components/app/common/Game'
import { RebusGame } from '../../../../components/app/games'
import { setCompleted } from '../../../../core/store/games/slice'
import { useAppDispatch } from '../../../../core/store/store'
import type { Rebus } from '../../../../core/types/models/rebus'
import rebusesData from '../../../../data/rebuses.json'
import { MainLayout } from '../../../../layouts'

type GameStatus = 'completed' | 'fail' | 'process'

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

  const onComplete = (time: number): void => {
    // eslint-disable-next-line no-console
    setGameStatus('completed')
    setExecutionTime(time)
    dispatch(setCompleted({ id: rebus.id, reward: 50, time, type: 'rebus' }))
  }

  const onFail = (): void => {
    // eslint-disable-next-line no-console
    setGameStatus('fail')
  }

  return (
    <MainLayout>
      {gameStatus === 'process' && <RebusGame onComplete={onComplete} onFail={onFail} rebus={rebus} />}
      {gameStatus === 'completed' && <GameReward time={executionTime} title={`Задание №${rebus.id}`} />}
      {gameStatus === 'fail' && <>Обосрались</>}
    </MainLayout>
  )
}

export default RebusesViewPage
