import Image from 'next/image'
import NotionTemplate from '@/src/components/templates/notion/notionTemplate'
import NotFound from 'next/dist/client/components/not-found-error'
import Header from '@/src/components/templates/common/Header/header'
import format from '@/src/api/common/dateFormat'
import { DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Properties } from '@/src/api/blog/type'
import { Notion } from '@/src/api/notion'
import styles from './page.module.scss'

interface Params {
  page: string
}
interface IProps {
  params: Params
}

export default async function ProjectPage({ params }: IProps) {
  const page = (await Notion.getPage(
    'blog',
    params.page,
  )) as DatabaseObjectResponse

  if (page === null) {
    return <NotFound />
  }

  const blocks = await Notion.getBlocks(page.id)

  const properties = page.properties as unknown as Properties
  const titleImage =
    (page.cover?.type === 'file'
      ? page.cover?.file.url
      : page.cover?.external.url) || ''

  return (
    <main>
      <Header activePath="blog" />
      <section className={styles.content}>
        <Image
          className={styles.titleImage}
          src={titleImage}
          alt="title"
          width={900}
          height={230}
        />
        <p className={styles.date}>
          {format('yyyy년 MM월 dd일', new Date(page.created_time))}
        </p>
        <div className={styles.title}>
          <p>{properties.Title.title[0].plain_text}</p>
        </div>
        <div className={styles.tags}>
          {properties.tag.multi_select
            .map((i) => i.name)
            .map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
        </div>
        <NotionTemplate blocks={blocks} />
      </section>
    </main>
  )
}
