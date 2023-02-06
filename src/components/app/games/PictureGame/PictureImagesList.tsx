import { ImageList, ImageListItem } from '@mui/material'
import type { FC } from 'react'

interface PictureImagesListProps {
  displayedImages: number
  images: string[]
}

const PictureImagesList: FC<PictureImagesListProps> = ({ images, displayedImages }) => (
  <ImageList cols={3} rowHeight={190} sx={{ height: 190, width: '100%' }} variant="quilted">
    {images.map((image, index) => {
      return index < displayedImages ? (
        <ImageListItem key={image} cols={1} rows={1}>
          <img alt="" loading="lazy" src={image} />
        </ImageListItem>
      ) : (
        <ImageListItem key="image-picture-placeholder" cols={1} rows={1}>
          <img alt="" loading="lazy" src="/images/placeholder-image.png" />
        </ImageListItem>
      )
    })}
  </ImageList>
)

export default PictureImagesList
