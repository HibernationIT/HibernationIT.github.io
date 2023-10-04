import Card from '@/src/components/atoms/common/Card/card'
import styles from './template.module.scss'

interface IProps {
  type: 'project' | 'blog'
  list: DatabaseQueryResponse
}

export default function Template({ type, list }: IProps) {
  return (
    <div className={styles.template}>
      {list.results.map((item, idx) => {
        const value = item
        const url =
          value.cover.type === 'file'
            ? value.cover.file.url
            : value.cover.external.url

        const properties = value.properties as CardProperties

        return (
          <Card
            key={idx}
            href={`/${type}/${properties.title.rich_text[0].plain_text}`}
            title={properties.Title.title[0].plain_text}
            description={properties.description.rich_text[0].plain_text}
            image={url}
            tags={properties.tag.multi_select.map((i) => i.name)}
            type={
              properties.type !== undefined
                ? properties.type.select.name
                : undefined
            }
          />
        )
      })}
    </div>
  )
}
