import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GameReward } from '../../../../components/app/common/Game'
import { PictureGame } from '../../../../components/app/games'
import { setCompleted } from '../../../../core/store/games/slice'
import { useAppDispatch } from '../../../../core/store/store'
import type { GameStatus } from '../../../../core/types/game'
import type { Picture } from '../../../../core/types/models'
import picturesData from '../../../../data/pictures.json'
import { MainLayout } from '../../../../layouts'

const pictures = picturesData as Picture[]

const PicturesViewPage: FC = () => {
  const dispatch = useAppDispatch()
  const { pictureId } = useParams()
  const picture = pictures.find((item) => item.id === Number(pictureId))
  const [gameStatus, setGameStatus] = useState<GameStatus>('process')
  const [executionTime, setExecutionTime] = useState<number>(0)

  if (!picture) {
    return <>404</>
  }

  const onComplete = useCallback(
    (time: number): void => {
      setGameStatus('completed')
      setExecutionTime(time)
      dispatch(setCompleted({ id: picture.id, reward: 50, time, type: 'picture' }))
    },
    [dispatch, picture.id]
  )

  const onFail = useCallback((): void => {
    setGameStatus('fail')
  }, [])

  return (
    <MainLayout>
      {' '}
      {gameStatus === 'process' && <PictureGame onComplete={onComplete} onFail={onFail} picture={picture} />}
      {gameStatus === 'completed' && <GameReward time={executionTime} title={`Задание №${picture.id}`} />}
      {gameStatus === 'fail' && <>Обосрались</>}
    </MainLayout>
  )
}

export default PicturesViewPage
