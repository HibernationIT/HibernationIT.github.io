import Image from 'next/image'
import NotFound from 'next/dist/client/components/not-found-error'
import Header from '@/src/components/templates/common/Header/header'
import format from '@/src/api/common/dateFormat'
import { Notion } from '@/src/api/notion'
import styles from './page.module.scss'
import PageTemplate from '@/src/components/templates/page/pageTemplate'

interface Params {
  page: string
}
interface IProps {
  params: Params
}

async function getPage(id: string) {
  return Notion.getPage('project', id)
}

export async function generateMetadata({ params }: IProps) {
  const page = await getPage(params.page)
  if (page === null) return {}
  return {
    title: `${page.properties.Title.title[0].plain_text} - Hibernation IT`,
    openGraph: {
      title: `${page.properties.Title.title[0].plain_text} - Hibernation IT`,
      description: page.properties.description.rich_text[0].plain_text,
      images:
        page.cover.type === 'file'
          ? page.cover.file.url
          : page.cover.external.url,
    },
  }
}

export default async function ProjectPage({ params }: IProps) {
  const page = await getPage(params.page)

  if (page === null) {
    return <NotFound />
  }

  const blocks = await Notion.getBlocks(page.id)

  const { properties } = page
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
            src={`/images/project/${properties.type?.select.name}_icon.svg`}
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
        <PageTemplate blocks={blocks} />
      </section>
    </main>
  )
}
