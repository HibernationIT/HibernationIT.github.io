import styles from './loadingCard.module.scss'

export default function LoadingCard() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.title}></div>
        <div className={styles.description}></div>
        <div className={styles.tags}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
