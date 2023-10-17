import Search from '@/src/components/atoms/blog/Search/search'
import Template from '@/src/components/templates/common/Template/template'
import Chip from '@/src/components/atoms/blog/Chip/chip'
import styles from './page.module.scss'

export default async function Blog({ searchParams }: any) {
  return (
    <>
      <div className={styles.searchBox}>
        {/* <Search initValue={titleValue} tags={tagsValue} /> */}
        {/* <div className={styles.tagBox}> */}
        {/*   {tags.map((tag, idx) => ( */}
        {/*     <Chip */}
        {/*       key={idx} */}
        {/*       name={tag.name} */}
        {/*       title={titleValue} */}
        {/*       tags={tagsValue} */}
        {/*       active={tagsValue.includes(tag.name)} */}
        {/*     /> */}
        {/*   ))} */}
        {/* </div> */}
      </div>
    </>
  )
}
