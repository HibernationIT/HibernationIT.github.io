import React from 'react'
import Project from '@/src/common/project'
import Content from '@/src/components/templates/common/Content/content'
import moment from 'moment'
import styles from './page.module.scss'

interface Params {
  page: string
}
interface IProps {
  params: Params
}

function getData(page: string) {
  return Project.getPost(`${page}.md`)
}

export const generateStaticParams = async () => {
  return Project.getAllPosts().map((post) => ({
    page: post.id,
  }))
}

export function generateMetadata({ params }: IProps) {
  const post = getData(params.page)

  return {
    title: `${post.data.title} - Hibernation IT`,
    description: post.description,
    openGraph: {
      title: `${post.data.title} - Hibernation IT`,
      description: post.description,
      images: `https://hibernationit.github.io/project/${params.page}/${post.data.image}`,
    },
  }
}

export default function Page({ params }: IProps) {
  const post = getData(params.page)

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <img
          className={styles.titleImg}
          src={`./${post.data.image}`}
          alt={post.data.image}
        />
        <h3 className={styles.dateBox}>
          {moment(post.data.created_dt).format('YYYY년 MM월 DD일')}
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
      <script
        src="https://utteranc.es/client.js"
        /*
        // @ts-ignore */
        repo="HibernationIT/HibernationIT.github.io"
        issue-term="pathname"
        theme="github-light"
        crossOrigin="anonymous"
        async
      />
    </main>
  )
}
