import parse from 'node-html-parser'

interface IProps {
  block: Bookmark
}

export default async function BookmarkBlock({ block }: IProps) {
  const html = await fetch(block.bookmark.url).then((res) => res.text())
  const element = parse(html)
  console.log(html)

  const title = element
    .querySelector('meta[property="og:title"]')
    ?.getAttribute('content')
  const image = element
    .querySelector('meta[property="og:image"]')
    ?.getAttribute('content')
  const description = element
    .querySelector('meta[property="og:description"]')
    ?.getAttribute('content')

  console.log(title)
  console.log(image)
  console.log(description)

  return <div>bookmark</div>
}
