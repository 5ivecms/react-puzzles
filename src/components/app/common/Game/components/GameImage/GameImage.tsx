import type { FC } from 'react'

interface GameImageProps {
  src: string
}

const GameImage: FC<GameImageProps> = ({ src }) => {
  return <img alt="" src={src} style={{ width: 400 }} />
}

export default GameImage
