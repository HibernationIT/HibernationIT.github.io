import BookmarkBlock from '@/src/components/atoms/notion/Bookmark/bookmarkBlock'

interface IProps {
  block: Block
}

export default function NotionBlock({ block }: IProps) {
  switch (block.type) {
    case 'bookmark': {
      const bookmark = block as Bookmark
      return <BookmarkBlock block={bookmark} />
    }
    default:
      return <div></div>
  }
}
