import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.scss'

interface IProps {
  children: ReactElement
  href: string
  src: string
  type: '1' | '2' | '3'
}

export default function Card({ children, href, src, type }: IProps) {
  function getStyle() {
    switch (type) {
      case '1':
        return styles.type1
      case '2':
        return styles.type2
      default:
        return styles.type3
    }
  }

  return (
    <div className={`${styles.card} ${getStyle()}`}>
      <Link href={href}>
        <div>{children}</div>
        <Image src={src} alt="image" width={10} height={10} />
      </Link>
    </div>
  )
}
