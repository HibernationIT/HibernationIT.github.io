import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/common/Template/template'
import Project from '@/src/common/project'

export default async function Page() {
  const list = Project.getAllPosts('backend')

  return (
    <>
      <Nav activePath="backend" />
      <Template type="project" list={list} />
    </>
  )
}
