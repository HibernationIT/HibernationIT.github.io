import Link from 'next/link'
import Image from 'next/image'
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
      <Image src={src} alt="icon" width={32} height={32} />
      <span>{children}</span>
    </Link>
  )
}
