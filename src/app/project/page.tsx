import Project from '@/src/common/project'
import Template from '@/src/components/templates/common/Template/template'

export default function Page() {
  const list = Project.getAllPosts()

  return (
    <section>
      <Template type="project" list={list} />
    </section>
  )
}
