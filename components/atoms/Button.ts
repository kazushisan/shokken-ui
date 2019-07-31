import styled from 'styled-components'

interface Props {
  color?: 'primary' | 'default' | 'danger'
}

const Button = styled.button`
  background-color: ${(props: Props) => {
    switch (props.color) {
      case 'primary':
        return '#333'
      case 'danger':
        return '#D64933'
      default:
        return '#eee'
    }
  }};
  color: ${(props: Props) =>
    props.color === 'primary' || props.color === 'danger' ? '#fff' : 'rgba(#000, 0.6)'};
  display: block;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 12px 16px;
  border-radius: 4px;
  border: none;
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
