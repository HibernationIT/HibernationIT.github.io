import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'
import styles from './numberedListItemBlock.module.scss'

interface IProps {
  block: NumberedListItem
  number: number | undefined
}

export default function NumberedListItemBlock({ block, number }: IProps) {
  return (
    <ol className={styles.list} start={number || 1}>
      <li>
        <RichTexts richTexts={block.numbered_list_item.rich_text} />
        {block.has_children
          ? block.children.map((b, idx) => <NotionBlock key={idx} block={b} />)
          : null}
      </li>
    </ol>
  )
}
