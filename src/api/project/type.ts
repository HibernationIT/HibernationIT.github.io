import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

interface SelectPropertyResponse {
  id: string
  name: 'mobile' | 'frontend' | 'backend'
  color: string
}

export interface Cover {
  type: 'file'
  file: {
    url: string
    expiry_time: string
  }
}

export interface Properties {
  Title: {
    type: 'title'
    title: Array<RichTextItemResponse>
    id: string
  }
  type: {
    type: 'select'
    select: SelectPropertyResponse
    id: string
  }
  description: {
    type: 'rich_text'
    rich_text: Array<RichTextItemResponse>
    id: string
  }
  title: {
    type: 'rich_text'
    rich_text: Array<RichTextItemResponse>
    id: string
  }
  tag: {
    type: 'multi_select'
    multi_select: Array<SelectPropertyResponse>
    id: string
  }
  create_dt: {
    type: 'created_time'
    created_time: string
    id: string
  }
}
