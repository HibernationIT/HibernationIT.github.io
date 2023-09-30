import Notion2Component from '@/src/api/notion/notion2Component'
import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'
import notion from '@/src/api/common/notion'

export default async function ProjectPage() {
  const n2c = new Notion2Component({ client: notion })
  const blocks = await n2c.getBlocks('abb07387c63645bbbbf093859db799bf')

  return (
    <>
      {blocks.map((block, idx) => (
        <NotionBlock key={idx} block={block} />
      ))}
    </>
  )
}
