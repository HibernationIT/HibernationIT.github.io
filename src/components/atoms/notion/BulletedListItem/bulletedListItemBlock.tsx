import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'
import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import styles from './bulletedListItemBlock.module.scss'

interface IProps {
  block: BulletedListItem
  count?: number
}

export default function BulletedListItemBlock({ block, count }: IProps) {
  function getType() {
    const type = (count || 0) % 3
    if (type === 0) return styles.disc
    if (type === 1) return styles.circle
    return styles.square
  }

  return (
    <ul className={`${styles.list} ${getType()}`}>
      <li>
        <RichTexts richTexts={block.bulleted_list_item.rich_text} />
        {block.has_children
          ? block.child.map((b, idx) => (
              <NotionBlock key={idx} block={b} count={(count || 0) + 1} />
            ))
          : ''}
      </li>
    </ul>
  )
}
