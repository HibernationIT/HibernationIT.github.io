import Image from 'next/image'
import styles from './loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.box}>
        <Image src="/images/loading.svg" alt="loading" width={86} height={86} />
        <p>loading</p>
      </div>
    </div>
  )
}
