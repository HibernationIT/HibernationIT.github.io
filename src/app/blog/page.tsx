import Search from '@/src/components/atoms/blog/Search/search'
import Template from '@/src/components/templates/common/Template/template'
import Chip from '@/src/components/atoms/blog/Chip/chip'
import { getDatabase, getPages } from '@/src/api/blog/get'
import { Page } from '@/src/api/blog/type'
import styles from './page.module.scss'

export default async function Blog({ searchParams }: any) {
  const tagsValue =
    searchParams.tags !== undefined ? searchParams.tags.split(',') : []
  const titleValue = searchParams.title || ''

  const database = await getDatabase()
  const properties = database.properties as unknown as Page
  const tags = properties.tag.multi_select.options

  const list = await getPages(searchParams.title, tagsValue)

  return (
    <>
      <div className={styles.searchBox}>
        <Search initValue={titleValue} tags={tagsValue} />
        <div className={styles.tagBox}>
          {tags.map((tag, idx) => (
            <Chip
              key={idx}
              name={tag.name}
              title={titleValue}
              tags={tagsValue}
              active={tagsValue.includes(tag.name)}
            />
          ))}
        </div>
      </div>
      <Template type="blog" list={list} />
    </>
  )
}
