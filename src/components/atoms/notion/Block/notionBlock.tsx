import BookmarkBlock from '@/src/components/atoms/notion/Bookmark/bookmarkBlock'
import BulletedListItemBlock from '@/src/components/atoms/notion/BulletedListItem/bulletedListItemBlock'
import CalloutBlock from '@/src/components/atoms/notion/Callout/CalloutBlock'
import CodeBlock from '@/src/components/atoms/notion/Code/codeBlock'
import ColumnBlock from '@/src/components/atoms/notion/Column/columnBlock'
import ColumnListBlock from '@/src/components/atoms/notion/ColumnList/columnListBlock'
import EquationBlock from '@/src/components/atoms/notion/Equation/equationBlock'
import DividerBlock from '@/src/components/atoms/notion/Divider/dividerBlock'
import FileBlock from '@/src/components/atoms/notion/File/fileBlock'
import HeaderBlock from '@/src/components/atoms/notion/Header/headerBlock'
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
      case 'callout': {
        const callout = block as Callout
        return <CalloutBlock block={callout} />
      }
      case 'code': {
        const code = block as Code
        return <CodeBlock block={code} />
      }
      case 'column_list': {
        const columnList = block as ColumnList
        return <ColumnListBlock block={columnList} />
      }
      case 'column': {
        const column = block as Column
        return <ColumnBlock block={column} />
      }
      case 'divider': {
        return <DividerBlock />
      }
      case 'equation': {
        const equation = block as Equation
        return <EquationBlock block={equation} />
      }
      case 'file': {
        const file = block as FileBlock
        return <FileBlock block={file} />
      }
      case 'heading_1': {
        const header1 = block as Header1
        return <HeaderBlock block={header1} />
      }
      case 'heading_2': {
        const header2 = block as Header2
        return <HeaderBlock block={header2} />
      }
      case 'heading_3': {
        const header3 = block as Header3
        return <HeaderBlock block={header3} />
      }
      default:
        return <div>block</div>
    }
  }

  return <div className={styles.block}>{getBlock()}</div>
}
