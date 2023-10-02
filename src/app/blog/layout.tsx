import Header from '@/src/components/templates/common/Header/header'
import React, { Suspense } from 'react'
import Loading from '@/src/app/blog/loading'
import Image from 'next/image'
import styles from '@/src/app/blog/page.module.scss'

interface IProps {
  children: React.ReactNode
}

export default async function Layout({ children }: IProps) {
  return (
    <main>
      <Header activePath="blog" />
      <section>
        <Image
          className={styles.title}
          src="/images/blog/illust.svg"
          alt="illust"
          width={1200}
          height={260}
        />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </section>
    </main>
  )
}
