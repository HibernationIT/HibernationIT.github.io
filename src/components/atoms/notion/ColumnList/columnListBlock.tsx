import ColumnBlock from '@/src/components/atoms/notion/Column/columnBlock'
import styles from './columnListBlock.module.scss'

export default function ColumnListBlock({ block }: { block: ColumnList }) {
  return (
    <div className={styles.columnList}>
      {block.children.map((child, idx) => {
        const column = child as Column
        return <ColumnBlock key={idx} block={column} />
      })}
    </div>
  )
}
