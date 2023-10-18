import Link from 'next/link'
import styles from './type.module.scss'

interface IProps {
  children: string
  href: string
  src: string
  active: boolean
}

export default function Type({ children, href, src, active }: IProps) {
  return (
    <Link
      className={`${styles.button} ${active ? styles.active : ''}`}
      href={href}
    >
      <img src={src} alt="icon" />
      <span>{children}</span>
    </Link>
  )
}
