import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_SECRET_KEY,
})

export default notion
