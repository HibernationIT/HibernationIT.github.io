import styles from './richText.module.scss'
import NotionColor from '@/src/components/atoms/notion/notionColor'

interface IProps {
  richText: RichText
}

export default function RichText({ richText }: IProps) {
  let style = styles.richText
  if (richText.annotations.bold) style += ` ${styles.bold}`
  if (richText.annotations.italic) style += ` ${styles.italic}`
  if (richText.annotations.underline) style += ` ${styles.underline}`
  if (richText.annotations.strikethrough) style += ` ${styles.strikethrough}`

  style += ` ${NotionColor(richText.annotations.color)}`

  if (richText.annotations.code)
    return <code className={style}>{richText.plain_text}</code>
  else return <span className={style}>{richText.plain_text}</span>
}
