import Header from '@/src/components/templates/common/Header/header'
import React from 'react'
import styles from '@/src/app/blog/page.module.scss'

interface IProps {
  children: React.ReactNode
}

export function generateMetadata() {
  return {
    title: 'blog - Hibernation IT',
    openGraph: {
      images: '/images/blog/illust.svg',
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
        {children}
      </section>
    </main>
  )
}
