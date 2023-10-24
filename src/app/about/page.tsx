import Template from '@/src/components/templates/about/Template/template'
import styles from './page.module.scss'

export default function Page() {
  const frontStack = [
    'HTML',
    'CSS',
    'Javascript',
    'Tailwind',
    'SCSS',
    'Typescript',
    'React',
    'Redux',
    'Next JS',
  ]
  const backStack = [
    'Spring Boot',
    'GCP',
    'Firebase',
    'Redis',
    'Kafka',
    'Postgresql',
    'Kubernetes',
    'Docker',
  ]

  return (
    <section>
      <h1 className={styles.title}>What I can do</h1>
      <h3 className={styles.subTitle}>Front</h3>
      <Template items={frontStack} />
      <h3 className={styles.subTitle}>Back</h3>
      <Template items={backStack} />
    </section>
  )
}
