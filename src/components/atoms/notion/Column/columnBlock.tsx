import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'
import styles from './columnBlock.module.scss'

export default function ColumnBlock({ block }: { block: Column }) {
  return (
    <div className={styles.column}>
      {block.children.map((child, idx) => (
        <NotionBlock key={idx} block={child} />
      ))}
    </div>
  )
}
