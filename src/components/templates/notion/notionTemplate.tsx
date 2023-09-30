import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'
import styles from './notionTemplate.module.scss'

export default function NotionTemplate({ blocks }: { blocks: Block[] }) {
  return (
    <div className={styles.template}>
      {blocks.map((block, idx) => {
        let number = 1
        if (idx !== 0) {
          while (blocks[idx - number].type === 'numbered_list_item') {
            number++
          }
        }

        return <NotionBlock key={idx} block={block} numbered={number} />
      })}
    </div>
  )
}
