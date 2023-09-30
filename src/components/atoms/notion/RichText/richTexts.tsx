import RichText from '@/src/components/atoms/notion/RichText/richText'
import styles from './richText.module.scss'

interface IProps {
  richTexts: RichText[]
}

export default function RichTexts({ richTexts }: IProps) {
  const array = []

  for (let i = 0; i < richTexts.length; i++) {
    if (!richTexts[i].annotations.code) {
      array.push(<RichText richText={richTexts[i]} />)
    } else {
      const codes = []
      while (i < richTexts.length && richTexts[i].annotations.code) {
        codes.push(<RichText richText={richTexts[i]} />)
        i++
      }
      array.push(<code>{codes}</code>)
    }
  }

  return <div className={styles.richTexts}>{array}</div>
}
