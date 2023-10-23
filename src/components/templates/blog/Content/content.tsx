'use client'

import Template from '@/src/components/templates/common/Template/template'
import { Preview } from '@/src/common/type/blog'
import { useMemo, useState } from 'react'
import Search from '@/src/components/atoms/blog/Search/search'
import styles from './content.module.scss'

export default function Content({ list }: { list: Preview[] }) {
  const [search, setSearch] = useState('')

  const data = useMemo(() => {
    return list.filter((item) => item.title.includes(search))
  }, [list, search])

  return (
    <section className={styles.content}>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <Template type="blog" list={data} />
    </section>
  )
}
