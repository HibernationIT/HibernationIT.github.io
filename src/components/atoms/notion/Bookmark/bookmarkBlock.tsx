import parse from 'node-html-parser'
import Image from 'next/image'
import styles from './bookmarkBlock.module.scss'
import Link from 'next/link'

export default async function BookmarkBlock({ block }: { block: Bookmark }) {
  const html = await fetch(block.bookmark.url).then((res) => res.text())
  const elements = parse(html)

  const title =
    elements.querySelector('meta[name="title"]')?.getAttribute('content') ||
    elements
      .querySelector('meta[property="og:title"]')
      ?.getAttribute('content') ||
    elements
      .querySelector('meta[name="twitter:title"]')
      ?.getAttribute('content') ||
    elements.querySelector('title')?.text
  const description =
    elements
      .querySelector('meta[name="description"]')
      ?.getAttribute('content') ||
    elements
      .querySelector('meta[property="og:description"]')
      ?.getAttribute('content') ||
    elements
      .querySelector('meta[name="twitter:description"]')
      ?.getAttribute('content')
  const image =
    elements
      .querySelector('meta[property="og:image"]')
      ?.getAttribute('content') ||
    elements.querySelector('meta[name="twitter:url"]')?.getAttribute('content')
  const iconUrl = elements
    .querySelector('link[type="image/x-icon"]')
    ?.getAttribute('href')
  const icon =
    iconUrl !== undefined && iconUrl.startsWith('/')
      ? block.bookmark.url + iconUrl
      : iconUrl

  return (
    <Link href={block.bookmark.url} className={styles.bookmark} target="_blank">
      {image !== undefined ? (
        <Image
          className={styles.image}
          src={image}
          alt="image"
          width={200}
          height={124}
        />
      ) : (
        ''
      )}
      <div className={styles.content}>
        <p>{title}</p>
        <p>{description}</p>
        <div className={styles.url}>
          {icon !== undefined ? (
            <Image src={icon} alt="icon" width={20} height={20} />
          ) : (
            ''
          )}
          <p>{block.bookmark.url}</p>
        </div>
      </div>
    </Link>
  )
}
