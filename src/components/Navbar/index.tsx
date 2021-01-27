import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Nav, Logo, NavContainer, LinkContainer, A } from './index.styled'

const Navbar = (): React.ReactElement => {
  const router = useRouter()

  return (
    <Nav>
      <NavContainer>
        <Logo>Shiori Labs</Logo>
        <LinkContainer>
          <Link href="/" passHref>
            <A active={router.pathname === '/'}>Beranda</A>
          </Link>
          <Link href="/blog" passHref>
            <A active={router.pathname === '/blog'}>Blog</A>
          </Link>
          <Link href="/about" passHref>
            <A active={router.pathname === '/about'}>Tentang</A>
          </Link>
        </LinkContainer>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
