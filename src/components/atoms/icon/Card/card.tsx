'use client'

import { useState } from 'react'
import Icon from '@/src/common/icon'
import styles from './card.module.scss'
import { download } from '@/src/common/download'

interface IProps {
  name: string
  png: string
  svg: string
}

export default function Card({ name, png, svg }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.card}>
      <button onClick={() => setIsOpen(true)}>
        <img src={`./${svg}`} alt={name} />
      </button>
      <p>{name}</p>

      <div
        className={`${styles.download} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <img src="/images/icon/cancel.svg" alt="cancel" />
        <button
          className={styles.downloadBtn}
          onClick={() => download(png, name)}
        >
          PNG
        </button>
        <button
          className={styles.downloadBtn}
          onClick={() => download(svg, name)}
        >
          SVG
        </button>
      </div>
    </div>
  )
}
