import * as fs from 'fs'
import matter from 'gray-matter'
import { Metadata, Preview } from '@/src/common/type/icon'

export default class Icon {
  private static BASE_PATH = './HibernationIT/icon'

  public static getAllIcons(): Preview[] {
    const files = fs.readdirSync(this.BASE_PATH)
    return files.map((file) => {
      const mdFile = fs.readFileSync(`${this.BASE_PATH}/${file}`, 'utf-8')
      const md = matter(mdFile)
      const metadata = md.data as Metadata
      return {
        name: file.replace('.md', ''),
        svg: metadata.svg.replace('[[', '').replace(']]', ''),
        png: metadata.png.replace('[[', '').replace(']]', ''),
      } as Preview
    })
  }
}
