import Blog from '@/src/common/blog'
import styles from './page.module.scss'

export default function Page() {
  const list = Blog.getAllPosts()

  return <section>blog</section>
}
