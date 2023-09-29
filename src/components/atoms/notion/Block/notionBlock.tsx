import BookmarkBlock from '@/src/components/atoms/notion/Bookmark/bookmarkBlock'
import styles from './notionBlock.module.scss'

interface IProps {
  block: Block
}

export default function NotionBlock({ block }: IProps) {
  function getBlock() {
    switch (block.type) {
      case 'bookmark': {
        const bookmark = block as Bookmark
        return <BookmarkBlock block={bookmark} />
      }
      default:
        return <div>block</div>
    }
  }

  return <div className={styles.block}>{getBlock()}</div>
}
