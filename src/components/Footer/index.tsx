import { FooterContainer } from './styles'
import { GithubLogo, LinkedinLogo, At, InstagramLogo } from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <a
        href="https://github.com/arlenresende"
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo size={25} />
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <LinkedinLogo size={25} />
      </a>
      <a href="mailto:arlenaraujo12@gmail.com" target="_blank" rel="noreferrer">
        <At size={25} />
      </a>
      <a
        href="https://www.instagram.com/arlen_resende/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramLogo size={25} />
      </a>
    </FooterContainer>
  )
}
