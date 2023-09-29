import Image from 'next/image'
import styles from './externalBlock.module.scss'

interface IProps {
  external: External
}

export default function ExternalBlock({ external }: IProps) {
  return (
    <div className={styles.external}>
      <Image src={external.external.url} alt="icon" width={20} height={20} />
    </div>
  )
}
