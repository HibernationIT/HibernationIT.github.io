import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/common/Template/template'
import { getPages } from '@/src/api/project/get'

export default async function ProjectMobile() {
  const list = await getPages('mobile')

  return (
    <>
      <Nav activePath="mobile" />
      <Template type="project" list={list} />
    </>
  )
}
