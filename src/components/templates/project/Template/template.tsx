import Card from '@/src/components/atoms/project/Card/card'
import styles from './template.module.scss'

export default function Template() {
  return (
    <div className={styles.template}>
      <Card
        href="/project"
        title="test"
        type="mobile"
        description="testsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetset"
        image="/images/project/illust.svg"
        tags={['flutter', 'next js']}
      />
      <Card
        href="/project"
        title="test"
        type="mobile"
        description="testsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetset"
        image="/images/project/illust.svg"
        tags={['flutter', 'next js']}
      />
      <Card
        href="/project"
        title="test"
        type="mobile"
        description="testsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetset"
        image="/images/project/illust.svg"
        tags={['flutter', 'next js']}
      />
      <Card
        href="/project"
        title="test"
        type="mobile"
        description="testsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetsettestsetset"
        image="/images/project/illust.svg"
        tags={['flutter', 'next js']}
      />
    </div>
  )
}
