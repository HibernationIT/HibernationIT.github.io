import { Post, Metadata, Preview } from '@/src/common/type/blog'
import matter from 'gray-matter'
import * as fs from 'fs'
import moment from 'moment'

export default class Blog {
  private static BASE_PATH = './HibernationIT/blog'

  public static getAllPosts(title?: string, tags?: string[]): Preview[] {
    const files = fs.readdirSync(this.BASE_PATH)
    let posts = files
      .map((file) => {
        const mdFile = fs.readFileSync(`${this.BASE_PATH}/${file}`, 'utf-8')
        const md = matter(mdFile)
        const metadata = md.data as Metadata
        return {
          ...this.parsingMetadata(metadata),
          id: file.replace('.md', ''),
          description: this.sliceContent(md.content),
        }
      })
      .filter((meta) => meta.view)
      .sort((a, b) => b.created_dt.diff(a.created_dt))

    if (title) {
      posts = posts.filter((post) => post.title.includes(title))
    }
    if (tags) {
      tags.forEach((tag) => {
        posts = posts.filter((post) => post.tags.includes(tag))
      })
    }
    return posts
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
      image: data.image.replace('[[', '').replace(']]', ''),
      view: data.view,
    }
  }

  private static sliceContent(content: string): string {
    return content
      .replaceAll('#', '')
      .replaceAll('---', '')
      .replaceAll('```', '')
      .replaceAll('\n', ' ')
      .slice(0, 90)
      .concat('...')
  }
}
