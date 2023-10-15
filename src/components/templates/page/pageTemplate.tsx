'use client'

import { NotionBlocks } from '@hibernationit/notion2component/dist/BlockType'
import NotionTemplate from '@hibernationit/notion2component/dist/NotionTemplate'

export default function PageTemplate({ blocks }: { blocks: NotionBlocks[] }) {
  return <NotionTemplate blocks={blocks} />
}
