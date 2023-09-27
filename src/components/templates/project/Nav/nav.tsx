import Type from '@/src/components/atoms/project/Type/type'
import styles from './nav.module.scss'

interface IProps {
  activePath?: 'mobile' | 'backend' | 'frontend' | undefined
}

export default function Nav({ activePath }: IProps) {
  return (
    <nav className={styles.nav}>
      <Type
        href={activePath === 'mobile' ? '/project' : '/project/mobile'}
        src="/images/project/mobile_icon.svg"
        active={activePath === 'mobile'}
      >
        Mobile Application
      </Type>
      <Type
        href={activePath === 'backend' ? '/project' : '/project/backend'}
        src="/images/project/backend_icon.svg"
        active={activePath === 'backend'}
      >
        Backend Application
      </Type>
      <Type
        href={activePath === 'frontend' ? '/project' : '/project/front'}
        src="/images/project/frontend_icon.svg"
        active={activePath === 'frontend'}
      >
        Frontend Application
      </Type>
    </nav>
  )
}
