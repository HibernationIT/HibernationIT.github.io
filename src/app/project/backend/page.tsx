import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/project/Template/template'
import getList from '@/src/api/project/get'

export default async function ProjectFrontend() {
  const list = await getList('backend')

  return (
    <>
      <Nav activePath="backend" />
      <Template list={list} />
    </>
  )
}
