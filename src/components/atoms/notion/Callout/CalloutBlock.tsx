import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import NotionColor from '@/src/components/atoms/notion/notionColor'
import IconBlock from '@/src/components/atoms/notion/Icon/iconBlock'
import styles from './CalloutBlock.module.scss'

export default function CalloutBlock({ block }: { block: Callout }) {
  return (
    <div className={`${NotionColor(block.callout.color)} ${styles.callout}`}>
      <IconBlock icon={block.callout.icon} />
      <div>
        <RichTexts richTexts={block.callout.rich_text} />
      </div>
    </div>
  )
}