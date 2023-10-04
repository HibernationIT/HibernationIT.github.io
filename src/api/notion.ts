import { Client } from '@notionhq/client'
import LogFactory from '@/src/api/common/logger'
import Notion2Component from '@/src/api/notion/notion2Component'

export class Notion {
  private static secretKey = process.env.NOTION_API_SECRET_KEY

  private static projectDB = process.env.NOTION_PROJECT_DATABASE || ''

  private static iconDB = process.env.NOTION_ICON_DATABASE || ''

  private static blogDB = process.env.NOTION_BLOG_DATABASE || ''

  private static client = new Client({
    auth: this.secretKey,
  })

  private static n2c = new Notion2Component({ client: this.client })

  private static sorts: {
    property: string
    direction: 'ascending' | 'descending'
  }[] = [{ property: 'created_dt', direction: 'descending' }]

  private static onlyView = { property: 'is_view', checkbox: { equals: true } }

  public static async getProjects(
    type?: 'mobile' | 'frontend' | 'backend',
  ): Promise<DatabaseQueryResponse> {
    const filter: { and: any[] } = {
      and: [this.onlyView],
    }
    if (type !== undefined) {
      filter.and.push({
        property: 'type',
        select: { equals: type },
      })
    }

    const getProjects = () => {
      return this.client.databases.query({
        database_id: this.projectDB,
        filter,
        sorts: this.sorts,
      })
    }

    return this.delayCheck(getProjects, 'project > getAll')
  }

  public static async getIcons(): Promise<DatabaseItemResponse> {
    const getIcons = () => {
      return this.client.databases.query({
        database_id: this.iconDB,
      })
    }

    return this.delayCheck(getIcons, 'icon > getAll')
  }

  public static async getBlogDB(): Promise<DatabaseInfoResponse> {
    const getBlogDB = () => {
      return this.client.databases.retrieve({ database_id: this.blogDB })
    }

    return this.delayCheck(getBlogDB, 'blog > getDB')
  }

  public static async getBlogs(
    title?: string,
    tags?: string[],
  ): Promise<DatabaseQueryResponse> {
    const filter: { and: any[] } = {
      and: [this.onlyView],
    }
    if (title !== undefined && title !== null && title !== '') {
      const or: any[] = []
      title.split(' ').forEach((word) => {
        or.push({ property: 'Title', title: { contains: word } })
      })
      filter.and.push({ or })
    }
    if (tags !== undefined && tags !== null && tags.length) {
      tags.forEach((tag) =>
        filter.and.push({ property: 'tag', multi_select: { contains: tag } }),
      )
    }

    const getBlogs = () => {
      return this.client.databases.query({
        database_id: this.blogDB,
        filter,
        sorts: this.sorts,
      })
    }

    return this.delayCheck(getBlogs, 'blog > getAll')
  }

  public static async getPage(
    type: 'project' | 'blog',
    title: string,
  ): Promise<PageInfoResponse | null> {
    const getPage = async () => {
      const result = await this.client.databases.query({
        database_id: type === 'project' ? this.projectDB : this.blogDB,
        filter: { property: 'title', rich_text: { equals: title } },
      })
      if (result.results.length) return result.results[0]
      return null
    }

    return this.delayCheck(getPage, 'page > getOne')
  }

  public static async getBlocks(id: string) {
    const getBlocks = () => {
      return this.n2c.getBlocks(id)
    }

    return this.delayCheck(getBlocks, 'block > getAll')
  }

  private static async delayCheck(work: Function, name: string) {
    const start = new Date()
    const result = await work()
    const end = new Date()

    LogFactory.info(`(${name}) ${end.getTime() - start.getTime()}ms`)
    return result
  }
}
