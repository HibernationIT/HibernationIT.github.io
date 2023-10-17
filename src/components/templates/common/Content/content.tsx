import Markdown from 'react-markdown'
import styles from './content.module.scss'

export default function Content({ content }: { content: string }) {
  return (
    <section className={styles.content}>
      <Markdown
        components={{
          img: (props) => <img src={props.src} alt={props.alt} />,
        }}
      >
        {content}
      </Markdown>
    </section>
  )
}
