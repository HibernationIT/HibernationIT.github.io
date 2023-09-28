import { Client } from '@notionhq/client'
import LogFactory from '@/src/api/common/logger'
import BookmarkBlock from '@/src/components/atoms/notion/Bookmark/bookmarkBlock'

export default class Notion2Component {
  private client

  constructor({ client }: { client: Client }) {
    this.client = client
  }

  public async getBlocks(block: string): Promise<Block[]> {
    const start = new Date()

    const results = await this.getAll(block)

    const end = new Date()
    LogFactory.info(`(notion) delay time: ${end.getTime() - start.getTime()}ms`)

    return results
  }

  private async getAll(block: string): Promise<Block[]> {
    const children: Block[] = await this.getChildren(block)

    return await Promise.all(
      children.map(async (child: Block) => {
        if (child.has_children) {
          child.child = await this.getAll(child.id)
          return child
        }
        return child
      }),
    )
  }

  private async getChildren(block: string): Promise<Block[]> {
    let more = true
    let cursor = block
    let results: any[] = []

    while (more) {
      const children = await this.client.blocks.children.list({
        block_id: cursor,
        page_size: 50,
      })

      cursor = children.next_cursor || ''
      more = children.has_more
      results = results.concat(children.results)
    }

    return results.map((value) => value as Block)
  }
}
