import Nav from '@/src/components/templates/project/Nav/nav'
import LoadingCard from '@/src/components/atoms/common/LoadingCard/loadingCard'
import styles from './loading.module.scss'

export default function Loading() {
  return (
    <>
      <Nav />
      <div className={styles.template}>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </>
  )
}
