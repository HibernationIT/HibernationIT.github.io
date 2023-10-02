'use client'

import styles from './chip.module.scss'

interface IProps {
  name: string
  title: string
  tags: string[]
  active: boolean
}

export default function Chip({ name, title, tags, active }: IProps) {
  return (
    <button
      className={`${styles.chip} ${active ? styles.active : ''}`}
      onClick={() => {
        let tagList: string[] = tags
        if (active) tagList = tagList.filter((tag) => tag !== name)
        else tagList.push(name)

        document.location.href = `/blog/?title=${title}&tags=${tagList.join(
          ',',
        )}`
      }}
    >
      {name}
    </button>
  )
}
