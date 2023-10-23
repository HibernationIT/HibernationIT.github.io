import Header from '@/src/components/templates/common/Header/header'
import Template from '@/src/components/templates/icon/template/template'
import Icon from '@/src/common/icon'
import styles from './page.module.scss'

export default async function Page() {
  const list = Icon.getAllIcons()

  return (
    <>
      <section>
        <Template list={list} />
      </section>
    </>
  )
}
