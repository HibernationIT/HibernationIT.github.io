import React from 'react'
import Header from '@/src/components/templates/common/Header/header'
import styles from './page.module.scss'

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <main>
      <Header activePath="project" />
      <section className={styles.content}>{children}</section>
    </main>
  )
}
