import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-vermelho);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Botao = styled.button`
  background-color: var(--cor-branco);
  border: 1px solid var(--cor-branco);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-vermelho);
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--cor-vermelho);
    color: var(--cor-branco);
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-vermelho);
`
