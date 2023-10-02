import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/common/Template/template'
import { getPages } from '@/src/api/project/get'

export default async function ProjectFrontend() {
  const list = await getPages('frontend')

  return (
    <>
      <Nav activePath="frontend" />
      <Template type="project" list={list} />
    </>
  )
}
