import Header from '@/src/components/templates/common/Header/header'
import Card from '@/src/components/atoms/home/Card/card'
import styles from './page.module.scss'

export default function Page() {
  return (
    <main>
      <Header activePath="home" />
      <section className={styles.content}>
        <Card href="/project" src="/images/home/project.svg" type="1">
          Project
        </Card>
        <Card href="/icon" src="/images/home/icon.svg" type="2">
          Icon
        </Card>
        <Card href="/blog" src="/images/home/blog.svg" type="3">
          Blog
        </Card>
        <Card href="/illust" src="/images/home/illust.svg" type="3">
          Illust
        </Card>
        <Card href="/about" src="/images/home/about.svg" type="2">
          About me
        </Card>
      </section>
    </main>
  )
}
