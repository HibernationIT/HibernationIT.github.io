import Blog from '@/src/common/blog'
import Content from '@/src/components/templates/blog/Content/content'

export default function Page() {
  const list = Blog.getAllPosts()

  return <Content list={list} />
}
