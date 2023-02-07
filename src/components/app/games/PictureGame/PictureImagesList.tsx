import { ImageList, ImageListItem } from '@mui/material'
import type { FC } from 'react'

import { imageList, imageListItem } from './style.sx'

interface PictureImagesListProps {
  displayedImages: number
  images: string[]
}

const PictureImagesList: FC<PictureImagesListProps> = ({ images, displayedImages }) => (
  <ImageList cols={3} rowHeight={190} sx={imageList} variant="quilted">
    {images.map((image, index) => {
      return index < displayedImages ? (
        <ImageListItem key={image} cols={1} rows={1} sx={imageListItem}>
          <img alt="" loading="lazy" src={image} />
        </ImageListItem>
      ) : (
        <ImageListItem key="image-picture-placeholder" cols={1} rows={1} sx={imageListItem}>
          <img alt="" loading="lazy" src="/images/placeholder-image.png" />
        </ImageListItem>
      )
    })}
  </ImageList>
)

export default PictureImagesList
