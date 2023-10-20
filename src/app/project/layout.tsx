import React from 'react'
import Header from '@/src/components/templates/common/Header/header'
import styles from '@/src/app/project/page.module.scss'

interface IProps {
  children: React.ReactNode
}

export function generateMetadata() {
  return {
    title: 'projects - Hibernation IT',
    description: '지금까지 만들어본 개발 프로젝트들을 소개합니다.',
    openGraph: {
      title: 'projects - Hibernation IT',
      description: '지금까지 만들어본 개발 프로젝트들을 소개합니다.',
      images: 'https://hibernationit.github.io/images/project/illust.svg',
    },
  }
}

export default function Layout({ children }: IProps) {
  return (
    <main>
      <Header activePath="project" />
      <section>
        <img
          className={styles.title}
          src="/images/project/illust.svg"
          alt="illust"
        />
      </section>
      {children}
    </main>
  )
}
