import { Moment } from 'moment'

export interface Metadata {
  tags: string[]
  title: string
  created_dt: string
  image: string
  view: boolean
}

export interface Preview {
  id: string
  tags: string[]
  title: string
  created_dt: string
  image: string
  view: boolean
  description: string
}

export interface Post {
  data: Metadata
  description: string
  content: string
}
