import Link from 'next/link'
import styles from './header.module.scss'

export default function Header({ activePath }: { activePath?: string }) {
  const menuData = [
    { id: 'home', path: '/', name: 'Home' },
    { id: 'project', path: '/project', name: 'Project' },
    { id: 'icon', path: '/icon', name: 'Icon' },
    { id: 'blog', path: '/blog', name: 'Blog' },
    { id: 'illust', path: '/illust', name: 'Illust' },
    { id: 'about', path: '/about', name: 'About' },
  ]

  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
      <ul>
        {menuData.map((menu, idx) => {
          return (
            <li key={idx}>
              <Link
                className={activePath === menu.id ? styles.active : undefined}
                href={menu.path}
              >
                {menu.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
