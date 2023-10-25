import Header from '@/src/components/templates/common/Header/header'
import React from 'react'
import styles from '@/src/app/blog/page.module.scss'

interface IProps {
  children: React.ReactNode
}

export function generateMetadata() {
  return {
    title: 'blog - Hibernation IT',
    description:
      '공부하면서 정리한 내용을 올리거나, 정보 공유하는 페이지입니다.',
    openGraph: {
      images: 'https://hibernationit.github.io/images/blog/illust.svg',
      description:
        '공부하면서 정리한 내용을 올리거나, 정보 공유하는 페이지입니다.',
    },
  }
}

export default async function Layout({ children }: IProps) {
  return (
    <main>
      <Header activePath="blog" />
      <section>
        <img
          className={styles.title}
          src="/images/blog/illust.svg"
          alt="illust"
        />
      </section>
      {children}
    </main>
  )
}
