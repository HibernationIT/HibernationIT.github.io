import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

interface File {
  url: string
  expiry_time: string
}

export interface Properties {
  name: {
    type: 'title'
    title: Array<RichTextItemResponse>
    id: string
  }
  png: {
    type: 'files'
    files: {
      name: string
      type: string
      file: File
    }[]
    id: string
  }
  svg: {
    type: 'files'
    files: {
      name: string
      type: string
      file: File
    }[]
    id: string
  }
}
