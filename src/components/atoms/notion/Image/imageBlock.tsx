export default function ImageBlock({ block }: { block: Image }) {
  const url =
    block.image.type === 'file'
      ? block.image.file.url
      : block.image.external.url

  return <img src={url} alt="image" />
}
