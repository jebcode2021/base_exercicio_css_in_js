import styled from 'styled-components'

export const Lista = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-vermelho);
  color: var(--cor-secundaria);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  ul li {
    margin-bottom: 5px;
  }

  &:hover {
    background-color: var(--cor-secundaria);
    color: var(--cor-preto);
  }

  &:hover a {
    border-color: var(--cor-secundaria);
    background-color: var(--cor-vermelho);
    color: var(--cor-secundaria);
  }
`

export const Titulo3 = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-secundaria);
  color: var(--cor-vermelho);
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  transition: all ease 0.3s;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
