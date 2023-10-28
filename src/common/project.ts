import * as fs from 'fs'
import matter from 'gray-matter'
import { Metadata, Post, Preview } from '@/src/common/type/project'
import moment from 'moment'

export default class Project {
  private static BASE_PATH = './HibernationIT/project'

  public static getAllPosts(): Preview[] {
    const files = fs.readdirSync(this.BASE_PATH)

    return files
      .map((file) => {
        const mdFile = fs.readFileSync(`${this.BASE_PATH}/${file}`, 'utf-8')
        const md = matter(mdFile)
        const metadata = md.data as Metadata
        return {
          ...this.parsingMetadata(metadata),
          id: file.replace('.md', ''),
          description: this.sliceContent(md.content),
        } as Preview
      })
      .filter((meta) => meta.view)
      .sort((a, b) => b.created_dt.diff(a.created_dt))
  }

  public static getPost(post: string): Post {
    const basePath = `${this.BASE_PATH}/${post}`

    const file = fs.readFileSync(basePath, 'utf-8')
    const md = matter(file)
    const metadata = md.data as Metadata
    return {
      data: this.parsingMetadata(metadata),
      description: this.sliceContent(md.content),
      content: md.content,
    }
  }

  private static parsingMetadata(data: Metadata): Metadata {
    return {
      tags: data.tags,
      title: data.title,
      created_dt: moment(data.created_dt),
      image: data.image?.replace('[[', '').replace(']]', ''),
      type: data.type,
      view: data.view,
    }
  }

  private static sliceContent(content: string): string {
    return content
      .replaceAll('#', '')
      .replaceAll('---', '')
      .replaceAll('```', '')
      .replaceAll('\n', ' ')
      .replaceAll('`', '')
      .slice(0, 85)
      .concat('...')
  }
}
