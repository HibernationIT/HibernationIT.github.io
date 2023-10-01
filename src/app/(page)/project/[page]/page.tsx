import notion from '@/src/api/common/notion'
import Image from 'next/image'
import Notion2Component from '@/src/api/notion/notion2Component'
import NotionTemplate from '@/src/components/templates/notion/notionTemplate'
import NotFound from 'next/dist/client/components/not-found-error'
import Header from '@/src/components/templates/common/Header/header'
import format from '@/src/api/common/dateFormat'
import { getPage } from '@/src/api/project/get'
import { DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Properties } from '@/src/api/project/type'
import styles from './page.module.scss'

interface Params {
  page: string
}
interface IProps {
  params: Params
}

export default async function ProjectPage({ params }: IProps) {
  const page = (await getPage(params.page)) as DatabaseObjectResponse

  if (page === null) {
    return <NotFound />
  }

  const n2c = new Notion2Component({ client: notion })
  const blocks = await n2c.getBlocks(page.id)

  const properties = page.properties as unknown as Properties
  const titleImage =
    (page.cover?.type === 'file'
      ? page.cover?.file.url
      : page.cover?.external.url) || ''

  return (
    <main>
      <Header activePath="project" />
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
          <Image
            src={`/images/project/${properties.type.select.name}_icon.svg`}
            alt="icon"
            width={42}
            height={42}
          />
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
