import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/common/Template/template'
import { Notion } from '@/src/api/notion'

export default async function ProjectBackend() {
  const list = await Notion.getProjects('backend')

  return (
    <>
      <Nav activePath="backend" />
      <Template type="project" list={list} />
    </>
  )
}
