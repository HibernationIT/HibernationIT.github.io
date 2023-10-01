import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/project/Template/template'
import { getPages } from '@/src/api/project/get'

export default async function ProjectBackend() {
  const list = await getPages('backend')

  return (
    <>
      <Nav activePath="backend" />
      <Template list={list} />
    </>
  )
}
