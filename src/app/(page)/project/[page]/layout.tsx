import React, { Suspense } from 'react'
import Loading from '@/src/app/(page)/project/[page]/loading'

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}
