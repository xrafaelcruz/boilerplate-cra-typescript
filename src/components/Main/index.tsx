import React from 'react'
import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration />
  </S.Wrapper>
)

export default Main
