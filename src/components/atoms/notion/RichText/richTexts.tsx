import RichText from '@/src/components/atoms/notion/RichText/richText'
import styles from './richText.module.scss'

interface IProps {
  richTexts: RichText[]
}

export default function RichTexts({ richTexts }: IProps) {
  const array = []

  for (let i = 0; i < richTexts.length; i++) {
    if (!richTexts[i].annotations.code) {
      array.push(<RichText key={i} richText={richTexts[i]} />)
    } else {
      const codes = []
      while (i < richTexts.length && richTexts[i].annotations.code) {
        codes.push(<RichText key={i} richText={richTexts[i]} />)
        i++
      }
      array.push(<code key={`c${i}`}>{codes}</code>)
    }
  }

  return <div className={styles.richTexts}>{array}</div>
}
