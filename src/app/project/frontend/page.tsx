import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/common/Template/template'
import { Notion } from '@/src/api/notion'

export default async function ProjectFrontend() {
  const list = await Notion.getProjects('frontend')

  return (
    <>
      <Nav activePath="frontend" />
      <Template type="project" list={list} />
    </>
  )
}
