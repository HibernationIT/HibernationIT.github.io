'use client'

import { useState } from 'react'
import RichTexts from '@/src/components/atoms/notion/RichText/richTexts'
import NotionBlock from '@/src/components/atoms/notion/Block/notionBlock'
import NotionColor from '@/src/components/atoms/notion/notionColor'
import styles from './headerBlock.module.scss'

interface IProps {
  block: Header1 | Header2 | Header3
}

export default function HeaderBlock({ block }: IProps) {
  const [isOpen, setOpen] = useState(true)
  const header =
    block.type === 'heading_1'
      ? (block as Header1).heading_1
      : block.type === 'heading_2'
      ? (block as Header2).heading_2
      : (block as Header3).heading_3
  const headerStyle =
    block.type === 'heading_1'
      ? styles.header1
      : block.type === 'heading_2'
      ? styles.header2
      : styles.header3

  function content() {
    return (
      <>
        {header.is_toggleable ? (
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
        ) : null}
        <RichTexts richTexts={header.rich_text} />
      </>
    )
  }

  return (
    <div
      className={`${styles.header} ${headerStyle} ${isOpen ? styles.open : ''}`}
    >
      {block.type === 'heading_1' ? (
        <h1 className={NotionColor(header.color)}>{content()}</h1>
      ) : block.type === 'heading_2' ? (
        <h2 className={NotionColor(header.color)}>{content()}</h2>
      ) : (
        <h3 className={NotionColor(header.color)}>{content()}</h3>
      )}
      {block.has_children ? (
        <div>
          {block.children.map((child, idx) => (
            <NotionBlock key={idx} block={child} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
