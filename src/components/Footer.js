import {
  faGithub,
  faDev,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  max-width: 48em;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Copyright = styled.div`
  font-size: 0.7em;
`

const Social = styled.div`
  display: flex;
  max-height: 50px;
`

const Icon = styled.div`
  & svg {
    transition: color 0.2s ease;
    color: white;
  }

  &:hover svg {
    cursor: pointer;
    color: #83a0e1;
  }
`

const A = styled.a`
  font-size: 1.4em;
  margin-right: 14px;
  &:last-child {
    margin-right: 0;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright className="copyright">
        Simon Nyström © {new Date().getFullYear()}
      </Copyright>

      <Social>
        <A
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/simon-nystr%C3%B6m-192b12a5/"
        >
          <Icon>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Icon>
        </A>
        <A
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/simon-nystrom/"
        >
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
        </A>
        <A
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:simon.nystrom90@gmail.com"
        >
          <Icon>
            <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
        </A>
        <A
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/simonnystrom"
        >
          <Icon>
            <FontAwesomeIcon icon={faDev} />
          </Icon>
        </A>
      </Social>
    </FooterWrapper>
  )
}

export default Footer
