import Card from '@/src/components/atoms/icon/Card/card'
import { Preview } from '@/src/common/type/icon'
import styles from './template.module.scss'

interface IProps {
  list: Preview[]
}

export default async function Template({ list }: IProps) {
  return (
    <div className={styles.template}>
      {list.map((item, idx) => {
        return <Card key={idx} name={item.name} png={item.png} svg={item.svg} />
      })}
    </div>
  )
}
