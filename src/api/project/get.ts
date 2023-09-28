import LogFactory from '@/src/api/common/logger'
import { Client } from '@notionhq/client'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

export default async function getList(
  type?: 'mobile' | 'frontend' | 'backend',
) {
  const notion = new Client({ auth: process.env.NOTION_API_SECRET_KEY })
  const databaseId = process.env.NOTION_PROJECT_DATABASE || ''

  const filter: { and: any[] } = {
    and: [
      {
        property: 'is_view',
        checkbox: { equals: true },
      },
    ],
  }
  if (type !== undefined) {
    filter.and.push({
      property: 'type',
      select: {
        equals: type,
      },
    })
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: filter,
    sorts: [
      {
        property: 'create_dt',
        direction: 'descending',
      },
    ],
  })

  LogFactory.debug(response)
  LogFactory.info(`(project > get) length: ${response.results.length}`)

  return response
}
