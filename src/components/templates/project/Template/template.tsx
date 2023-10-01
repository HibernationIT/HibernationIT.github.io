import Card from '@/src/components/atoms/project/Card/card'
import {
  DatabaseObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { Properties } from '@/src/api/project/type'
import styles from './template.module.scss'

interface IProps {
  list: QueryDatabaseResponse
}

export default function Template({ list }: IProps) {
  return (
    <div className={styles.template}>
      {list.results.map((item, idx) => {
        const value = item as DatabaseObjectResponse
        const coverObject = value.cover as File | External

        const url =
          coverObject.type === 'file'
            ? coverObject.file.url
            : coverObject.external.url

        const properties = value.properties as unknown as Properties

        return (
          <Card
            key={idx}
            href={`/project/${properties.title.rich_text[0].plain_text}`}
            title={properties.Title.title[0].plain_text}
            type={properties.type.select.name}
            description={properties.description.rich_text[0].plain_text}
            image={url}
            tags={properties.tag.multi_select.map((i) => i.name)}
          />
        )
      })}
    </div>
  )
}
