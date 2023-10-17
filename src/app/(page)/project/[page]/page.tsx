import React from 'react'
import Project from '@/src/common/project'
import styles from './page.module.scss'
import Content from '@/src/components/templates/common/Content/content'

interface Params {
  page: string
}
interface IProps {
  params: Params
}

export default function Page({ params }: IProps) {
  const post = Project.getPost(`${params.page}.md`)

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <img
          className={styles.titleImg}
          src={`./${post.data.image}`}
          alt={post.data.image}
        />
        <h3 className={styles.dateBox}>
          {post.data.created_dt.format('YYYY년 MM월 DD일')}
        </h3>
        <div className={styles.title}>
          <h1>{post.data.title}</h1>
          <img src={`/images/project/${post.data.type}_icon.svg`} alt="icon" />
        </div>
        <div className={styles.chips}>
          {post.data.tags.map((tag, key) => (
            <div key={key} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
      </section>
      <Content content={post.content} />
    </main>
  )
}
