import LogFactory from '@/src/api/common/logger'
import notion from '@/src/api/common/notion'

export default async function getList(
  type?: 'mobile' | 'frontend' | 'backend',
) {
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
  LogFactory.info(`(project > get) length: ${response.results.length}`)

  return response
}
