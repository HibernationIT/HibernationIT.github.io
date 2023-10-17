import { Moment } from 'moment'

export interface Metadata {
  tags: string[]
  title: string
  created_dt: Moment
  image: string
  type: string
  view: boolean
}

export interface Preview {
  id: string
  tags: string[]
  title: string
  created_dt: Moment
  image: string
  type: 'mobile' | 'frontend' | 'backend'
  view: boolean
  description: string
}

export interface Post {
  data: Metadata
  content: string
}
