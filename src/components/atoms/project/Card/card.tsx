import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.scss'

interface IProps {
  href: string
  image: string
  title: string
  type: 'mobile' | 'backend' | 'frontend'
  description: string
  tags: string[]
}

export default function Card({
  href,
  image,
  title,
  type,
  description,
  tags,
}: IProps) {
  return (
    <Link className={styles.card} href={href}>
      <Image src={image} alt="image" width={354} height={236} />
      <div className={styles.content}>
        <div className={styles.title}>
          <p>{title}</p>
          <Image
            src={`/images/project/${type}_icon.svg`}
            alt="icon"
            width={20}
            height={20}
          />
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
