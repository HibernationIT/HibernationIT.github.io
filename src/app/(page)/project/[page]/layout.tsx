import React from 'react'
import Header from '@/src/components/templates/common/Header/header'

interface IProps {
  children: React.ReactNode
}

export default function Layout({children}: IProps) {
  return (
    <main>
      <Header activePath="project" />
      {children}
    </main>
  )
}