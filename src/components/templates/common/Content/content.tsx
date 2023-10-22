import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Code from '@/src/components/atoms/common/content/Code/code'
import styles from './content.module.scss'
import 'highlight.js/styles/github.css'

export default function Content({ content }: { content: string }) {
  return (
    <section className={styles.content}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: (props) => <img src={props.src} alt={props.alt} />,
          code: (props) => <Code props={props} />,
          input: (props) => <input type={props.type} checked={props.checked} />,
        }}
      >
        {content}
      </Markdown>
    </section>
  )
}
