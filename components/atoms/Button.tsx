import React from 'react'

interface Props {
  color: 'primary' | 'default'
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined
  children?: React.ReactNode
}

class Button extends React.Component<Props> {
  render() {
    const { children, onClick } = this.props
    return <button onClick={onClick}>{children}</button>
  }
}

export default Button
