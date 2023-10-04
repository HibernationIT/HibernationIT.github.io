import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/common/Template/template'
import { Notion } from '@/src/api/notion'

export default async function ProjectMobile() {
  const list = await Notion.getProjects('mobile')

  return (
    <>
      <Nav activePath="mobile" />
      <Template type="project" list={list} />
    </>
  )
}
