import { NotionToMarkdown } from 'notion-to-md'
import notion from '@/src/api/common/notion'

const notion2md = new NotionToMarkdown({
  notionClient: notion
})

export default notion2md