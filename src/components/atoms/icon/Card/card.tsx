'use client'

import Image from 'next/image'
import { useState } from 'react'
import { download } from '@/src/api/common/downloadFile'
import styles from './card.module.scss'

interface IProps {
  src: string
  name: string
  png: {
    url: string
    name: string
  }
  svg: {
    url: string
    name: string
  }
}

export default function Card({ src, name, png, svg }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.card}>
      <Image
        onClick={() => setIsOpen(true)}
        src={src}
        alt={name}
        width={64}
        height={64}
      />
      <p>{name}</p>

      <div
        className={`${styles.download} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <Image
          src="/images/icon/cancel.svg"
          alt="cancel"
          width={16}
          height={16}
        />
        <button
          className={styles.downloadBtn}
          onClick={() => download(png.url, png.name)}
        >
          PNG
        </button>
        <button
          className={styles.downloadBtn}
          onClick={() => download(svg.url, svg.name)}
        >
          SVG
        </button>
      </div>
    </div>
  )
}
