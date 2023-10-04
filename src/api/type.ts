interface ExternalType {
  type: 'external'
  external: {
    url: string
  }
}

interface FileType {
  type: 'file'
  name: string
  file: {
    url: string
  }
}

interface RichTextProperties {
  type: 'text'
  text: {
    content: string
    link: string | null
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: string | null
}

interface MultiSelectProperties {
  name: string
  color: string
}

interface DatabaseQueryResponse {
  object: 'list'
  results: DatabaseItemResponse[]
  next_cursor: string | null
  has_more: boolean
}

interface DatabaseItemResponse {
  object: 'page'
  id: string
  created_time: string
  cover: ExternalType | FileType
  properties: CardProperties | IconProperties
}

interface CardProperties {
  type?: {
    select: {
      name: 'mobile' | 'frontend' | 'backend'
    }
  }
  description: {
    rich_text: RichTextProperties[]
  }
  title: {
    rich_text: RichTextProperties[]
  }
  created_dt: {
    created_time: string
  }
  tag: {
    multi_select: MultiSelectProperties[]
  }
  is_view: {
    checkbox: false
  }
  Title: {
    title: RichTextProperties[]
  }
}

interface IconProperties {
  name: {
    title: RichTextProperties[]
  }
  png: {
    files: FileType[]
  }
  svg: {
    files: FileType[]
  }
}

interface DatabaseInfoResponse {
  object: 'database'
  title: RichTextProperties[]
  description: []
  properties: BlogDatabaseProperties
}

interface BlogDatabaseProperties {
  tag: {
    multi_select: {
      options: MultiSelectProperties[]
    }
  }
}

interface PageInfoResponse {
  id: string
  created_time: string
  cover: ExternalType | FileType
  properties: CardProperties
}
