import Header from '@/src/components/templates/common/Header/header'
import React from 'react'
import { Metadata } from 'next'
import styles from '@/src/app/icon/page.module.scss'

export const metadata: Metadata = {
  title: 'Icon - Hibernation IT',
  description: '직접 디자인한 아이콘들을 소개합니다.',
  openGraph: {
    title: 'Icon - Hibernation IT',
    description: '직접 디자인한 아이콘들을 소개합니다.',
    images: 'https://hibernationit.github.io/images/title.svg',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
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
      {children}
    </main>
  )
}
