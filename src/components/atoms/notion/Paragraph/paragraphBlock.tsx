import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'

export default function ParagraphBlock({ block }: { block: Paragraph }) {
  return <RichTexts richTexts={block.paragraph.rich_text} />
}
