import React, { Suspense } from 'react'
import Header from '@/src/components/templates/common/Header/header'
import Loading from '@/src/app/project/loading'
import Image from 'next/image'
import styles from '@/src/app/project/page.module.scss'

interface IProps {
  children: React.ReactNode
}

export function generateMetadata() {
  return {
    title: 'projects - Hibernation IT',
    openGraph: {
      images: '/images/project/illust.svg',
    },
  }
}

export default function Layout({ children }: IProps) {
  return (
    <main>
      <Header activePath="project" />
      <section>
        <Image
          className={styles.title}
          src="/images/project/illust.svg"
          alt="illust"
          width={1200}
          height={260}
        />
      </section>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  )
}
