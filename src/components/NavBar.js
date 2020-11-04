import { useRouter } from 'next/router'
import styled from 'styled-components'

const NavWrapper = styled.div`
  border-bottom: 2px solid #262e40;
  margin-top: -2px;
`
const Nav = styled.nav`
  max-width: 48em;
  margin: 0 auto;
  font-weight: 300;
  display: flex;
  padding-left: 2em;
  padding-right: 2em;
`
const A = styled.a`
  color: inherit;
  text-decoration: none;
  display: block;
  padding 1em 0.8em;
  position: relative;
  border-bottom: 2px solid #262e40;
  top: 2px;
  transition: border-bottom 0.2s ease;
  border-bottom: 2px solid ${(props) => (props.active ? '#83a0e1' : '#262e40')};

  &:first-child {
    padding 1em 0em;
  } 

  &:hover {
    border-bottom: 2px solid #83a0e1;
  }

`

const NavBar = () => {
  const { pathname } = useRouter()

  return (
    <NavWrapper>
      <Nav>
        <A active={pathname === '/'} href="/">
          home
        </A>

        <A active={pathname.startsWith('/blog')} href="/blog">
          blog
        </A>
      </Nav>
    </NavWrapper>
  )
}

export default NavBar
