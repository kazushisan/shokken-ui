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
}

class LoginForm extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = { name : '', pass : '' }

    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  handleChange(event) {
    const { target } = event
    const { value } = target
    const { id } = target

    this.setState({
      [id]: value
    })
  }

  onClick = () => {
    this.props.func(this.state.name, this.state.pass);
  };

  render() {
    return (
      <div style={{ textAlign: 'center'}}>
        <Item>
          <p>Log in</p>
        </Item>
        <Item style={{marginTop: 40}}>
          <Input
            id="name"
            placeholder={this.props.inputName}
            onChange={this.handleChange}
          />
        </Item>
        <Item>
          <Input
            id="pass"
            placeholder={this.props.inputPass}
            onChange={this.handleChange}
          />
        </Item>
        <Item  style={{ marginTop: 40 }}>
          <Button color="primary" onClick={this.onClick}>
            {this.props.label}
          </Button>
        </Item>
      </div>
    )
  }
}

export default LoginForm
