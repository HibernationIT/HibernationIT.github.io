import Illust from '@/src/common/illust'
import Template from '@/src/components/templates/illust/template/template'

export default function Page() {
  const photos = Illust.getAllImages()

  return (
    <section>
      <Template photos={photos} />
    </section>
  )
}
