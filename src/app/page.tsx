import Header from '@/src/components/templates/Header/header'
import Card from '@/src/components/atoms/Home/Card/card'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <Header activePath="home" />
      <section className={styles.content}>
        <Card href="/project" src="/images/project.svg" type="1">
          <span>Project</span>
        </Card>
        <Card href="/icon" src="/images/icon.svg" type="2">
          <span>Icon</span>
        </Card>
        <Card href="/blog" src="/images/blog.svg" type="3">
          <span>Blog</span>
        </Card>
        <Card href="/illust" src="/images/illust.svg" type="3">
          <span>Illust</span>
        </Card>
        <Card href="/about" src="/images/about.svg" type="2">
          <span>About me</span>
        </Card>
      </section>
    </main>
  )
}
