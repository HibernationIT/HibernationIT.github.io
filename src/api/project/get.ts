import LogFactory from '@/src/api/common/logger'
import notion from '@/src/api/common/notion'

const databaseId = process.env.NOTION_PROJECT_DATABASE || ''

export async function getPages(type?: 'mobile' | 'frontend' | 'backend') {
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
    filter,
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

export async function getPage(title: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'title',
      rich_text: {
        equals: title,
      },
    },
  })

  if (response.results.length) return response.results[0]
  return null
}
