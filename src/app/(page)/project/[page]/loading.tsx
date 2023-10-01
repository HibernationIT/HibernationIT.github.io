import Header from '@/src/components/templates/common/Header/header'
import styles from './loading.module.scss'
import Image from 'next/image'

export default function Loading() {
  return (
    <>
      <main>
        <Header activePath="project" />
        <section className={styles.content}>
          <div className={styles.titleImage} />
          <div className={styles.date} />
          <div className={styles.title} />
          <div className={styles.tags}>
            <div />
            <div />
          </div>
          <div className={`${styles.contents} ${styles.contents1}`} />
          <div className={`${styles.contents} ${styles.contents2}`} />
          <div className={`${styles.contents} ${styles.contents3}`} />
        </section>
      </main>
      <div className={styles.loading}>
        <Image
          src="/images/loading.svg"
          alt="loading..."
          width={86}
          height={86}
        />
      </div>
    </>
  )
}
