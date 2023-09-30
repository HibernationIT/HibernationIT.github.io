import Link from 'next/link'
import styles from './fileBlock.module.scss'

export default function FileBlock({ block }: { block: FileBlock }) {
  let url
  if (block.file.type === 'external') {
    url = block.file.external.url
  } else {
    url = block.file.file.url
  }
  const array = url.split('?')[0].split('/')
  const name = array[array.length - 1]

  return (
    <Link className={styles.file} href={url} target="_blank">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="#333333"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.25 4.5H8.5V27.5H23.5V12.75H18C17.0335 12.75 16.25 11.9665 16.25 11V4.5ZM24.7474 11.7158C24.9101 11.8989 25 12.1353 25 12.3802V28C25 28.5523 24.5523 29 24 29H8C7.44772 29 7 28.5523 7 28V4C7 3.44772 7.44772 3 8 3H16.5509C16.8366 3 17.1086 3.12215 17.2983 3.33564L24.7474 11.7158ZM17.75 6.10155L22.3264 11.25H18C17.8619 11.25 17.75 11.1381 17.75 11V6.10155Z"
        />
      </svg>
      <span>{name}</span>
    </Link>
  )
}
