import BookmarkBlock from '@/src/components/atoms/notion/Bookmark/bookmarkBlock'
import BulletedListItemBlock from '@/src/components/atoms/notion/BulletedListItem/bulletedListItemBlock'
import styles from './notionBlock.module.scss'

interface IProps {
  block: Block
  count?: number
}

export default function NotionBlock({ block, count }: IProps) {
  function getBlock() {
    switch (block.type) {
      case 'bookmark': {
        const bookmark = block as Bookmark
        return <BookmarkBlock block={bookmark} />
      }
      case 'bulleted_list_item': {
        const bulletedListItem = block as BulletedListItem
        return <BulletedListItemBlock block={bulletedListItem} count={count} />
      }
      default:
        return <div>block</div>
    }
  }

  return <div className={styles.block}>{getBlock()}</div>
}
