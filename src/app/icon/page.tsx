import Template from '@/src/components/templates/icon/template/template'
import Icon from '@/src/common/icon'

export default async function Page() {
  const list = Icon.getAllIcons()

  return (
    <section>
      <Template list={list} />
    </section>
  )
}
