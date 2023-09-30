import NotionColor from '@/src/components/atoms/notion/notionColor'
import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import styles from './quoteBlock.module.scss'

export default function QuoteBlock({ block }: { block: Quote }) {
  return (
    <div className={`${styles.quote} ${NotionColor(block.quote.color)}`}>
      <RichTexts richTexts={block.quote.rich_text} />
    </div>
  )
}
