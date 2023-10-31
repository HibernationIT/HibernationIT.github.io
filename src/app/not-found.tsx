import Link from 'next/link'
import styles from './not-found.module.scss'

export default function Custom404() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <img src="/images/nodata.svg" alt="nodata" />
        <h1>404</h1>
        <p>페이지를 찾을 수 없어요!</p>
        <Link href="/">홈으로 돌아가기</Link>
      </section>
    </main>
  )
}
