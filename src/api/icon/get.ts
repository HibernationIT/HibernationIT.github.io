import notion from '@/src/api/common/notion'

const databaseId = process.env.NOTION_ICON_DATABASE || ''

export async function getIcons() {
  return notion.databases.query({
    database_id: databaseId,
  })
}
