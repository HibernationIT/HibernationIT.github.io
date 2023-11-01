'use client'

import styles from './utterances.module.scss'

export default function Utterances() {
  return (
    <section
      className={styles.content}
      ref={(el) => {
        if (!el) {
          return
        }
        const scriptEl = document.createElement('script')
        scriptEl.src = 'https://utteranc.es/client.js'
        scriptEl.crossOrigin = 'anonymous'
        scriptEl.async = true
        scriptEl.setAttribute('repo', 'HibernationIT/HibernationIT.github.io')
        scriptEl.setAttribute('issue-term', 'pathname')
        scriptEl.setAttribute('theme', 'github-light')
        el.appendChild(scriptEl)
      }}
    >
      <h1>댓글</h1>
    </section>
  )
}
