import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const Item = styled.div`
  margin: 8px;
`

interface Props {
  inputName: string
  inputPass: string
  label: string
  // name: string
  // pass: string
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

  // handleChange(event: any) {
  //   const { target } = event
  //   const { value } = target
  //   const { id } = target
  //
  //   this.setState({
  //     [id as "name" | "pass"]: value as string
  //   })
  // }

  // handleChange(key: keyof State) {
  //   return (event: React.FormEvent<HTMLInputElement>) { => {
  //     const { value } = event.target
  //     this.setState({
  //       key: value as string
  //     })
  //   }
  // }

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
    const { inputName, inputPass, label } = this.props
    const { name, pass } = this.state

    return (
      <div style={{ textAlign: 'center' }}>
        <Item>
          <p>Log in</p>
        </Item>
        <form name="forms">
          <Item style={{ marginTop: 40 }}>
            <Input
              id="name"
              placeholder={inputName}
              value={name}
              onChange={this.handleName}
            />
          </Item>
          <Item>
            <Input
              id="pass"
              type="password"
              placeholder={inputPass}
              value={pass}
              onChange={this.handlePass}
            />
          </Item>
        </form>
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
