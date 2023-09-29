import EmojiBlock from '@/src/components/atoms/notion/Icon/emojiBlock'
import ExternalBlock from '@/src/components/atoms/notion/Icon/externalBlock'
import FileBlock from '@/src/components/atoms/notion/Icon/fileBlock'

interface IPorps {
  icon: Emoji | External | File
}

export default function IconBlock({ icon }: IPorps) {
  if (icon.type === 'emoji') return <EmojiBlock emoji={icon} />
  if (icon.type === 'external') return <ExternalBlock external={icon} />
  if (icon.type === 'file') return <FileBlock file={icon} />
}
