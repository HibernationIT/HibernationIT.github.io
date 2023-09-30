import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'
import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import styles from './bulletedListItemBlock.module.scss'

export default function BulletedListItemBlock({
  block,
}: {
  block: BulletedListItem
}) {
  return (
    <ul className={`${styles.list}`}>
      <li>
        <RichTexts richTexts={block.bulleted_list_item.rich_text} />
        {block.has_children
          ? block.children.map((b, idx) => <NotionBlock key={idx} block={b} />)
          : null}
      </li>
    </ul>
  )
}
