'use client'

import { ChangeEventHandler } from 'react'
import Image from 'next/image'
import styles from './search.module.scss'

interface IProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Search({ value, onChange }: IProps) {
  return (
    <div className={styles.search}>
      <input
        value={value}
        placeholder="제목으로 검색하기"
        onChange={onChange}
      />
      <img src="/images/blog/search.svg" alt="search" />
    </div>
  )
}
