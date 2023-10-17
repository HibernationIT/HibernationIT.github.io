import Link from 'next/link'
import styles from './card.module.scss'

interface IProps {
  href: string
  image: string
  title: string
  description: string
  tags: string[]
  type: 'mobile' | 'backend' | 'frontend' | undefined
}

export default function Card({
  href,
  image,
  title,
  description,
  tags,
  type,
}: IProps) {
  return (
    <Link className={styles.card} href={href}>
      <img src={image} alt="image" width={354} height={236} />
      <div className={styles.content}>
        <div className={styles.title}>
          <p>{title}</p>
          {type !== undefined ? (
            <img src={`/images/project/${type}_icon.svg`} alt="icon" />
          ) : undefined}
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
