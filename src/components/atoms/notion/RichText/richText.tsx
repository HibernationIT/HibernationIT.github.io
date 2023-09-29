import styles from './richText.module.scss'

interface IProps {
  richTexts: RichText[]
}

export default function RichText({ richTexts }: IProps) {
  function richTextBuilder(idx, isCode, className, text) {
    if (isCode)
      return (
        <code key={idx} className={className}>
          {text}
        </code>
      )
    return (
      <span key={idx} className={className}>
        {text}
      </span>
    )
  }

  return (
    <>
      {richTexts.map((richText, idx) => {
        let style = styles.richText
        if (richText.annotations.bold) style = style.concat(' ', styles.bold)
        if (richText.annotations.italic)
          style = style.concat(' ', styles.italic)
        if (richText.annotations.underline)
          style = style.concat(' ', styles.underline)
        if (richText.annotations.strikethrough)
          style = style.concat(' ', styles.strikethrough)

        return richTextBuilder(
          idx,
          richText.annotations.code,
          style,
          richText.plain_text,
        )
      })}
    </>
  )
}
