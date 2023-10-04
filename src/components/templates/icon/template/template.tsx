import Card from '@/src/components/atoms/icon/Card/card'
import styles from './template.module.scss'

interface IProps {
  list: DatabaseQueryResponse
}

export default async function Template({ list }: IProps) {
  return (
    <div className={styles.template}>
      {list.results.map((item, idx) => {
        const value = item
        const url =
          value.cover.type === 'file'
            ? value.cover.file.url
            : value.cover.external.url

        const properties = value.properties as IconProperties

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
