'use client'

import Highlight from 'react-highlight'
import styles from './code.module.scss'

export default function Code({ props }: { props: any }) {
  if (props.className) {
    return (
      <Highlight
        className={`${styles.codeBox} ${props.className.split('-')[1]}`}
      >
        {props.children}
      </Highlight>
    )
  }
  return <code className={styles.code}>{props.children}</code>
}
