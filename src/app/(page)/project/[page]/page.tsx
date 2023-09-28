import notion2md from '@/src/api/common/notion2md'
import LogFactory from '@/src/api/common/logger'

export default async function ProjectPage() {
  const md = await notion2md.pageToMarkdown("dd635411d706430a9da5d6a4db67f862")
  const stringBlock = notion2md.toMarkdownString(md)
  LogFactory.info(stringBlock)

  return <div>{ stringBlock.parent }</div>
}