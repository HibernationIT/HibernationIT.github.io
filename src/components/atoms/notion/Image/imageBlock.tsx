import styles from './imageBlock.module.scss'

export default function ImageBlock({ block }: { block: Image }) {
  const url =
    block.image.type === 'file'
      ? block.image.file.url
      : block.image.external.url

  return <img className={styles.image} src={url} alt="image" />
}
