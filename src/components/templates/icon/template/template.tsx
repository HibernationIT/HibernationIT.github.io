import {
  DatabaseObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'
import Card from '@/src/components/atoms/icon/Card/card'
import { Properties } from '@/src/api/icon/type'
import styles from './template.module.scss'

interface IProps {
  list: QueryDatabaseResponse
}

export default async function Template({ list }: IProps) {
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
            src={url}
            name={properties.name.title[0].plain_text}
            png={{
              url: properties.png.files[0].file.url,
              name: properties.png.files[0].name,
            }}
            svg={{
              url: properties.svg.files[0].file.url,
              name: properties.svg.files[0].name,
            }}
          />
        )
      })}
    </div>
  )
}
