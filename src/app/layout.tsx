import './reset.scss'
import './globals.scss'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import React from 'react'
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hibernation IT',
  description:
    'Hibernation IT 홈페이지 | 개발 | 포트폴리오 | 블로그 | 개발자 | 풀스택 | 프론트엔드 | 백엔드 |',
  openGraph: {
    title: 'Hibernation IT',
    description:
      'Hibernation IT 홈페이지 | 개발 | 포트폴리오 | 블로그 | 개발자 | 풀스택 | 프론트엔드 | 백엔드 |',
    images: '/images/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  )
}
