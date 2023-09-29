import parse from 'node-html-parser'
import Image from 'next/image'
import styles from './bookmarkBlock.module.scss'
import Link from 'next/link'

interface IProps {
  block: Bookmark
}

export default async function BookmarkBlock({ block }: IProps) {
  const html = await fetch(block.bookmark.url).then((res) => res.text())
  const elements = parse(html)

  function getTitle(element) {
    return (
      element.querySelector('meta[name="title"]')?.getAttribute('content') ||
      element
        .querySelector('meta[property="og:title"]')
        ?.getAttribute('content') ||
      element
        .querySelector('meta[name="twitter:title"]')
        ?.getAttribute('content') ||
      element.querySelector('title').text
    )
  }
  function getDescription(element) {
    return (
      element
        .querySelector('meta[name="description"]')
        ?.getAttribute('content') ||
      element
        .querySelector('meta[property="og:description"]')
        ?.getAttribute('content') ||
      element
        .querySelector('meta[name="twitter:description"]')
        ?.getAttribute('content')
    )
  }

  function getImage(element) {
    return (
      element
        .querySelector('meta[property="og:image"]')
        ?.getAttribute('content') ||
      element.querySelector('meta[name="twitter:url"]')?.getAttribute('content')
    )
  }

  function getIcon(element) {
    const url = element
      .querySelector('link[type="image/x-icon"]')
      ?.getAttribute('href')

    if (url !== undefined && url.startsWith('/'))
      return block.bookmark.url + url
    return url
  }

  return (
    <Link href={block.bookmark.url} className={styles.bookmark} target="_blank">
      {getImage(elements) !== undefined ? (
        <Image
          className={styles.image}
          src={getImage(elements)}
          alt="image"
          width={200}
          height={124}
        />
      ) : (
        ''
      )}
      <div className={styles.content}>
        <p>{getTitle(elements)}</p>
        <p>{getDescription(elements)}</p>
        <div className={styles.url}>
          {getIcon(elements) !== undefined ? (
            <Image src={getIcon(elements)} alt="icon" width={20} height={20} />
          ) : (
            ''
          )}
          <p>{block.bookmark.url}</p>
        </div>
      </div>
    </Link>
  )
}
