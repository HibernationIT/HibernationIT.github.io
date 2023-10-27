import { Preview } from '@/src/common/type/illust'
import * as fs from 'fs'
import matter from 'gray-matter'

export default class Illust {
  private static BASE_PATH = './HibernationIT/illust'

  public static getAllImages(): Preview[] {
    const files = fs.readdirSync(this.BASE_PATH)

    return files.map((file) => {
      const mdFile = fs.readFileSync(`${this.BASE_PATH}/${file}`, 'utf-8')
      const md = matter(mdFile)
      const metadata = md.data as Preview

      return {
        src: `/illust/${metadata.src.replace('[[', '').replace(']]', '')}`,
        width: metadata.width,
        height: metadata.height,
      }
    })
  }
}
