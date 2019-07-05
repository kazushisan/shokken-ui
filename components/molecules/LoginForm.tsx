import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const Item = styled.div`
  margin: 8px;
`

interface Props {
  placeholder: {
    name: string
    pass: string
  }
  label: string
  onClick: (name: string, pass: string) => void
}

interface State {
  name: string
  pass: string
}

class LoginForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { name: '', pass: '' }
  }

  handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      pass: event.target.value
    })
  }

  handleClick = () => {
    const { name, pass } = this.state
    const { onClick } = this.props
    onClick(name, pass)
    this.setState({
      name: '',
      pass: ''
    })
  }

  render() {
    const { placeholder, label } = this.props
    const { name, pass } = this.state

    return (
      <div>
        <Item>
          <Input
            placeholder={placeholder.name}
            value={name}
            onChange={this.handleName}
          />
        </Item>
        <Item>
          <Input
            type="password"
            placeholder={placeholder.pass}
            value={pass}
            onChange={this.handlePass}
          />
        </Item>
        <Item style={{ marginTop: 40 }}>
          <Button color="primary" onClick={this.handleClick}>
            {label}
          </Button>
        </Item>
      </div>
    )
  }
}

export default LoginForm
