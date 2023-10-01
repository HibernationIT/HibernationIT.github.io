import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'
import styles from './paragraphBlock.module.scss'

export default function ParagraphBlock({ block }: { block: Paragraph }) {
  return (
    <>
      <RichTexts richTexts={block.paragraph.rich_text} />
      {block.has_children ? (
        <div className={styles.children}>
          {block.children.map((child, idx) => (
            <NotionBlock key={idx} block={child} />
          ))}
        </div>
      ) : null}
    </>
  )
}
