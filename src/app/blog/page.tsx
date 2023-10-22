import Blog from '@/src/common/blog'
import Template from '@/src/components/templates/common/Template/template'
import styles from './page.module.scss'

export default function Page() {
  const list = Blog.getAllPosts()

  return <Template type="blog" list={list} />
}
