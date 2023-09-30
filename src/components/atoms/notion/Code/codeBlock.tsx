'use client'
import Highlight from 'react-highlight'
import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import styles from './codeBlock.module.scss'
import 'highlight.js/styles/github.css'

export default function CodeBlock({ block }: { block: Code }) {
  return (
    <div className={styles.code}>
      <Highlight className={block.code.language}>
        <RichTexts richTexts={block.code.rich_text} />
      </Highlight>
    </div>
  )
}
