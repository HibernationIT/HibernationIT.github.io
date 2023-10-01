import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/project/Template/template'
import { getPages } from '@/src/api/project/get'

export default async function ProjectFrontend() {
  const list = await getPages('frontend')

  return (
    <>
      <Nav activePath="frontend" />
      <Template list={list} />
    </>
  )
}
