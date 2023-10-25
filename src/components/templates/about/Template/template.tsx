import Block from '@/src/components/atoms/about/Block/block'
import styles from './template.module.scss'

export default function Template({ items }: { items: string[] }) {
  return (
    <div className={styles.template}>
      {items.map((item, key) => (
        <Block
          key={key}
          src={`/images/about/${item.toLowerCase()}.svg`}
          name={item}
        />
      ))}
    </div>
  )
}
