import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/project/Template/template'
import getList from '@/src/api/project/get'

export default async function ProjectMobile() {
  const list = await getList('mobile')

  return (
    <>
      <Nav activePath="mobile" />
      <Template list={list} />
    </>
  )
}
