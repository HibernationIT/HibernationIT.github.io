import styles from './block.module.scss'

interface IProps {
  src: string
  name: string
}

export default function Block({ src, name }: IProps) {
  return (
    <div className={styles.block}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  )
}
