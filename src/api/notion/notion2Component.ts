import { Client } from '@notionhq/client'
import LogFactory from '@/src/api/common/logger'

export default class Notion2Component {
  private client

  constructor({ client }: { client: Client }) {
    this.client = client
  }

  public async getBlocks(block: string): Promise<Block[]> {
    const start = new Date()

    const results = await this.getAll(block)

    const end = new Date()
    LogFactory.info(
      `(notion) delay get all time: ${end.getTime() - start.getTime()}ms`,
    )

    return results
  }

  private async getAll(block: string): Promise<Block[]> {
    const start = new Date()

    const children: Block[] = await this.getChildren(block)
    const results = await Promise.all(
      children.map(async (child: Block) => {
        if (child.has_children) {
          LogFactory.debug('(notion) need children')
          child.children = await this.getAll(child.id)
          return child
        }
        return child
      }),
    )
    const end = new Date()

    LogFactory.info(
      `(notion) delay get children time: ${end.getTime() - start.getTime()}ms`,
    )

    return results
  }

  private async getChildren(block: string): Promise<Block[]> {
    let more = true
    let cursor = block
    let results: any[] = []

    while (more) {
      const children = await this.client.blocks.children.list({
        block_id: cursor,
        page_size: 100,
      })

      cursor = children.next_cursor || ''
      more = children.has_more
      results = results.concat(children.results)
    }

    return results.map((value) => value as Block)
  }
}
