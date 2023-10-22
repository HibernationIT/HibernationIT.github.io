import Card from '@/src/components/atoms/common/Card/card'
import { Preview as Project } from '@/src/common/type/project'
import { Preview as Blog } from '@/src/common/type/blog'
import styles from './template.module.scss'

interface IProps {
  type: 'project' | 'blog'
  list: Project[] | Blog[]
}

export default function Template({ type, list }: IProps) {
  return (
    <div className={styles.template}>
      {list.map((item, idx) => {
        return (
          <Card
            key={idx}
            href={`/${type}/${item.id}`}
            title={item.title}
            description={item.description}
            image={`/${type}/${item.id}/${item.image}`}
            tags={item.tags}
            type={'type' in item ? item.type : undefined}
          />
        )
      })}
    </div>
  )
}
