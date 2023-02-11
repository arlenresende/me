import { HeaderContainer, NavContainer } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const { pathname } = useRouter()

  return (
    <HeaderContainer>
      <Link href="/">
        <h1>&#123;...AR&#125;</h1>
      </Link>
      <NavContainer>
        <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>
          Blog
        </Link>
        <a
          href="mailto:arlenaraujo12@gmail.com"
          className={pathname === '/contact' ? 'active' : ''}
        >
          Contact
        </a>
      </NavContainer>
    </HeaderContainer>
  )
}
