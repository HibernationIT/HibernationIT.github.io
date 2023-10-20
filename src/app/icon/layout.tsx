import Header from '@/src/components/templates/common/Header/header'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Icon - Hibernation IT',
  description: '직접 디자인한 아이콘들을 소개합니다.',
  openGraph: {
    title: 'Icon - Hibernation IT',
    description: '직접 디자인한 아이콘들을 소개합니다.',
    images: 'https://hibernationit.github.io/images/logo.svg',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header activePath="icon" />
      {children}
    </main>
  )
}
