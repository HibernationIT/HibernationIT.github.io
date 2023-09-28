import Card from '@/src/components/atoms/project/Card/card'
import styles from './template.module.scss'
import {
  DatabaseObjectResponse,
  QueryDatabaseResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { Properties, Cover } from '@/src/api/project/type'
import LoadingCard from '@/src/components/atoms/project/LoadingCard/loadingCard'

interface IProps {
  list: QueryDatabaseResponse
}

interface Rich_Text {
  type: 'rich_text'
  rich_text: Array<RichTextItemResponse>
  id: string
}

export default function Template({ list }: IProps) {
  return (
    <div className={styles.template}>
      {list.results.map((item, idx) => {
        const value = item as DatabaseObjectResponse
        const cover = value.cover as Cover
        const properties = value.properties as unknown as Properties

        return (
          <Card
            key={idx}
            href={`/project/${properties.title.rich_text[0].plain_text}`}
            title={properties.Title.title[0].plain_text}
            type={properties.type.select.name}
            description={properties.description.rich_text[0].plain_text}
            image={cover.file.url}
            tags={properties.tag.multi_select.map((i) => i.name)}
          />
        )
      })}
    </div>
  )
}
