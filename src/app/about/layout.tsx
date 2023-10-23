import React from 'react'
import Header from '@/src/components/templates/common/Header/header'
import styles from './page.module.scss'

interface IProps {
  children: React.ReactNode
}

export function generateMetadata() {
  return {
    title: 'about - Hibernation IT',
    description:
      '개발을 좋아하는 웹 개발자, 내가 만들고 싶은거 만드는 블로그 겸 프로젝트 페이지',
    openGraph: {
      title: 'about - Hibernation IT',
      description:
        '개발을 좋아하는 웹 개발자, 내가 만들고 싶은거 만드는 블로그 겸 프로젝트 페이지',
      images: 'https://hibernationit.github.io/images/project/illust.svg',
    },
  }
}

export default function Layout({ children }: IProps) {
  return (
    <main>
      <Header activePath="about" />
      <section className={styles.profile}>
        <img src="/about/profile.svg" alt="logo" />
        <div>
          <h3>About me</h3>
          <h6>개발을 좋아하는 웹 개발자</h6>
          <p>내가 만들고 싶은거 만드는 블로그 겸 프로젝트 페이지</p>
          <a href="mailto::hbnation.it@gmail.com">hbnation.it@gmail.com</a>
        </div>
      </section>
      {children}
    </main>
  )
}
