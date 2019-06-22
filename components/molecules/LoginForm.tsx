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
  onClick: (name: string, pass: string) => void
}

class LoginForm extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = { name: '', pass: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const { target } = event
    const { value } = target
    const { id } = target

    this.setState({
      [id]: value
    })
  }

  handleClick(event) {
    this.props.onClick(this.state.name, this.state.pass)
    document.form.reset();
  }


  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Item>
          <p>Log in</p>
        </Item>
        <form name="form">
          <Item style={{ marginTop: 40 }}>
            <Input
              id="name"
              name="name"
              placeholder={this.props.inputName}
              onChange={this.handleChange}
            />
          </Item>
          <Item>
            <Input
              id="pass"
              name="pass"
              type="password"
              placeholder={this.props.inputPass}
              onChange={this.handleChange}
            />
          </Item>
        </form>
        <Item style={{ marginTop: 40 }}>
          <Button color="primary" onClick={this.handleClick}>
            {this.props.label}
          </Button>
        </Item>
      </div>
    )
  }
}

export default LoginForm
