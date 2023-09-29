import styles from './codeBlock.module.scss'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism'

interface IProps {
  block: Code
}

export default function CodeBlock({ block }: IProps) {
  return (
    <div className={styles.code}>
      <SyntaxHighlighter language={block.code.language}>
        {block.code.rich_text.map((text) => text.plain_text)}
      </SyntaxHighlighter>
    </div>
  )
}
