import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/common/Template/template'
import Project from '@/src/common/project'

export default function Page() {
  const list = Project.getAllPosts('mobile')

  return (
    <>
      <Nav activePath="mobile" />
      <Template type="project" list={list} />
    </>
  )
}
