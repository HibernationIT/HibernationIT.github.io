import Nav from '@/src/components/templates/project/Nav/nav'
import Template from '@/src/components/templates/project/Template/template'
import { getPages } from '@/src/api/project/get'

export default async function Project() {
  const list = await getPages()

  return (
    <>
      <Nav />
      <Template list={list} />
    </>
  )
}
