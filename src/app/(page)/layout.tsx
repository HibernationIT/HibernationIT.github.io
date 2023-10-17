import React from 'react'
import Header from '@/src/components/templates/common/Header/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}
