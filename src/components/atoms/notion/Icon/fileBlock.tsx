import Image from 'next/image'
import styles from './fileBlock.module.scss'

interface IProps {
  file: File
}

export default function FileBlock({ file }: IProps) {
  return (
    <div className={styles.file}>
      <Image src={file.file.url} alt="icon" width={20} height={20} />
    </div>
  )
}
