import Template from '@/src/components/templates/icon/template/template'
import Icon from '@/src/common/icon'
import AdBox from '@/src/components/templates/common/AdBox/adBox'

export default async function Page() {
  const list = Icon.getAllIcons()

  return (
    <section>
      <AdBox />
      <Template list={list} />
    </section>
  )
}
