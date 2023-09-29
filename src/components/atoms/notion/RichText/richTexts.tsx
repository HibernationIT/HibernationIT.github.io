import RichText from '@/src/components/atoms/notion/RichText/richText'

interface IProps {
  richTexts: RichText[]
}

export default function RichTexts({ richTexts }: IProps) {
  return (
    <>
      {richTexts.map((richText, idx) => (
        <RichText key={idx} richText={richText} />
      ))}
    </>
  )
}
