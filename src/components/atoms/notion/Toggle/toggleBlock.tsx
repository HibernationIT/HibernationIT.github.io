'use client'

import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import styles from './toggleBlock.module.scss'
import { useState } from 'react'
import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'

export default function ToggleBlock({ block }: { block: Toggle }) {
  const [isOpen, setOpen] = useState(true)

  return (
    <div className={`${styles.toggle} ${isOpen ? styles.open : ''}`}>
      <div>
        <button
          className={styles.button}
          onClick={() => setOpen((state) => !state)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5079 15.1616C24.164 15.5377 24.164 16.4623 23.5079 16.8384L9.50442 24.8642C8.83893 25.2456 8 24.7781 8 24.0259L8 7.97412C8 7.22186 8.83893 6.75435 9.50442 7.13576L23.5079 15.1616Z"
              fill="#333333"
            />
          </svg>
        </button>
        <RichTexts richTexts={block.toggle.rich_text} />
      </div>
      {block.has_children ? (
        <div className={styles.children}>
          {block.children.map((child, idx) => (
            <NotionBlock key={idx} block={child} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
