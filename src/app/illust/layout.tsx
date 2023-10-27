import Header from '@/src/components/templates/common/Header/header'
import styles from '@/src/app/illust/page.module.scss'
import React from 'react'

interface IProps {
  children: React.ReactNode
}

export function generateMetadata() {
  return {
    title: 'illust - Hibernation IT',
    description:
      '페이지를 만들면서 그린 일러스트나 그림들을 보여주는 페이지입니다.',
    openGraph: {
      images: 'https://hibernationit.github.io/images/title.svg',
      description:
        '페이지를 만들면서 그린 일러스트나 그림들을 보여주는 페이지입니다.',
    },
  }
}

export default async function Layout({ children }: IProps) {
  return (
    <main>
      <Header activePath="illust" />
      <section>
        <h1 className={styles.title}>Illust</h1>
        <p className={styles.description}>
          페이지를 만들면서 그린 일러스트나 그림들을 보여주는 페이지입니다.
        </p>
      </section>
      {children}
    </main>
  )
}
