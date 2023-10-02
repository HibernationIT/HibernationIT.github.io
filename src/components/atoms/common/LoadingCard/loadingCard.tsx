import styles from './loadingCard.module.scss'

export default function LoadingCard() {
  return (
    <div className={styles.card}>
      <div className={styles.image} />
      <div className={styles.content}>
        <div className={styles.title} />
        <div className={styles.description} />
        <div className={styles.tags}>
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}
