import styled from 'styled-components'

const Input = styled.input`
  background-color: #fff;
  color: rgba(#000, 0.8);
  display: block;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  outline: none;
  margin: 0;
  font-size: inherit;

  &:focus {
    border-color: #5db7de;
  }

  &:disabled {
    opacity: 0.4;
  }

  &::placeholder {
    color: rgba(#000, 0.3);
  }
`

export default Input
