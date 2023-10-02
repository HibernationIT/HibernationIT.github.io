import notion from '@/src/api/common/notion'
import LogFactory from '@/src/api/common/logger'

const databaseId = process.env.NOTION_BLOG_DATABASE || ''

export async function getDatabase() {
  const start = new Date()

  const response = await notion.databases.retrieve({
    database_id: databaseId,
  })

  const end = new Date()
  LogFactory.info(`(blog > getDB) ${end.getTime() - start.getTime()}ms`)

  return response
}

export async function getPages(title?: string, tags?: string[]) {
  const start = new Date()

  const filter: { and: any[] } = {
    and: [
      {
        property: 'is_view',
        checkbox: { equals: true },
      },
    ],
  }
  if (title !== undefined && title !== null && title !== '') {
    const or: any[] = []
    title.split(' ').forEach((word) => {
      or.push({
        property: 'Title',
        title: {
          contains: word,
        },
      })
    })
    filter.and.push({ or })
  }
  if (tags !== undefined && tags !== null && tags.length) {
    tags.forEach((tag) =>
      filter.and.push({
        property: 'tag',
        multi_select: { contains: tag },
      }),
    )
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter,
    sorts: [
      {
        property: 'created_dt',
        direction: 'descending',
      },
    ],
  })

  const end = new Date()
  LogFactory.info(
    `(blog > getAll) ${end.getTime() - start.getTime()}ms, length: ${
      response.results.length
    }`,
  )

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
