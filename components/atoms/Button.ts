import styled from 'styled-components'

interface Props {
  color?: 'primary' | 'default'
}

const Button = styled.button`
  background-color: ${(props: Props) =>
    props.color === 'primary' ? '#5DB7DE' : '#eee'};
  color: ${(props: Props) =>
    props.color === 'primary' ? '#fff' : 'rgba(#000, 0.6)'};
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

  &:active {
    opacity: 0.4;
  }

  &:disabled {
    opacity: 0.4;
  }
`

export default Button
