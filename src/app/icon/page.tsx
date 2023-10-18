import Header from '@/src/components/templates/common/Header/header'
import Template from '@/src/components/templates/icon/template/template'
import Icon from '@/src/common/icon'
import styles from './page.module.scss'

export default async function Page() {
  const list = Icon.getAllIcons()

  return (
    <main>
      <Header activePath="icon" />
      <section>
        <h1 className={styles.title}>Icons</h1>
        <p className={styles.description}>
          아래의 아이콘은 제가 직접 디자인한 아이콘으로, 저작권 표시 없이 마음껏
          사용하여도 괜찮습니다.
        </p>
      </section>
      <section>
        <Template list={list} />
      </section>
    </main>
  )
}
