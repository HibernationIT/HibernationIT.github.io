import Illust from '@/src/common/illust'
import Template from '@/src/components/templates/illust/template/template'
import styles from './page.module.scss'

export default function Page() {
  const photos = Illust.getAllImages()

  return (
    <section className={styles.content}>
      <Template photos={photos} />
    </section>
  )
}
