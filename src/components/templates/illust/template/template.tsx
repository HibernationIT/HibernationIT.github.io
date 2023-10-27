'use client'

import PhotoAlbum, { RenderPhoto } from 'react-photo-album'
import { Preview } from '@/src/common/type/illust'

export default function Template({ photos }: { photos: Preview[] }) {
  return (
    <PhotoAlbum
      photos={photos}
      layout="rows"
      spacing={16}
      padding={12}
      renderPhoto={renderPhoto}
    />
  )
}

const renderPhoto: RenderPhoto = ({ imageProps: { alt, style, ...rest } }) => (
  <img
    {...rest}
    alt={alt}
    style={{
      ...style,
      borderRadius: '4px',
      boxShadow: '0 4px 8px 0 rgba(112, 144, 176, 0.15)',
    }}
  />
)
