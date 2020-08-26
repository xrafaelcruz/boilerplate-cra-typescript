import styled from 'styled-components'
import LogoOriginal from 'assets/svg/Logo'
import HeroIllustration from 'assets/svg/HeroIllustration'

export const Wrapper = styled.main`
  align-items: center;
  background-color: #06092b;
  color: #fff;
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  width: 100%;
`

export const Logo = styled(LogoOriginal)`
  margin: 0 0 2rem;
  width: 25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled(HeroIllustration)`
  margin: 3rem 0 0;
  width: min(30rem, 100%);
`
