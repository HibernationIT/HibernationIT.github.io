'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './search.module.scss'

interface IProps {
  initValue: string
  tags: string[]
}

export default function Search({ initValue, tags }: IProps) {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue(initValue || '')
  }, [initValue])

  function search() {
    console.log(tags)
    document.location.href = `/blog/?title=${value}&tags=${tags.join(',')}`
  }

  return (
    <div className={styles.search}>
      <input
        value={value}
        placeholder="제목으로 검색하기"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') search()
        }}
      />
      <Image
        src="/images/blog/search.svg"
        alt="search"
        width={32}
        height={32}
        onClick={() => {
          search()
        }}
      />
    </div>
  )
}
