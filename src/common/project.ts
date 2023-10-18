import * as fs from 'fs'
import matter from 'gray-matter'
import { Metadata, Post, Preview } from '@/src/common/type/project'
import moment from 'moment'

export default class Project {
  private static BASE_PATH = './HibernationIT/project'

  public static getAllPosts(type?: string): Preview[] {
    const files = fs.readdirSync(this.BASE_PATH)
    let posts = files.map((file) => {
      const mdFile = fs.readFileSync(`${this.BASE_PATH}/${file}`, 'utf-8')
      const md = matter(mdFile)
      const metadata = md.data as Metadata
      return {
        ...this.parsingMetadata(metadata),
        id: file.replace('.md', ''),
        description: md.content.replace('#', '').replace('---', ''),
      } as Preview
    })

    if (type) posts = posts.filter((meta) => meta.type === type)
    return posts.filter((meta) => meta.view)
  }

  public static getPost(post: string): Post {
    const basePath = `${this.BASE_PATH}/${post}`

    const file = fs.readFileSync(basePath, 'utf-8')
    const md = matter(file)
    const metadata = md.data as Metadata
    return {
      data: this.parsingMetadata(metadata),
      content: md.content,
    }
  }

  private static parsingMetadata(data: Metadata): Metadata {
    return {
      tags: data.tags,
      title: data.title,
      created_dt: moment(data.created_dt),
      image: data.image.replace('[[', '').replace(']]', ''),
      type: data.type,
      view: data.view,
    }
  }
}
