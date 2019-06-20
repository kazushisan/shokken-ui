import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

interface Props {
  form1: string
  form2: string
  label: string
}

class LoginForm extends React.Component<Props> {
  constructor() {
    super()
    this.state = { name: 'name', pass: 'pass' }
  }

  onClick() {
    this.setState(state => ({
      name: 'NAME',//nameの値に変更する
      pass: 'PASS'//passの値に変更する
    }));
  }

  render() {
    return (
      <div>
        <p>Login Window</p>
        <Input id="name" color="primary" placeholder={this.props.form1} />
        <Input id="pass" color="primary" placeholder={this.props.form2} />
        <Button color="primary" onClick={this.onClick}>
          {this.props.label}
        </Button>
        {this.state.name}
        {this.state.pass}
      </div>
    )
  }
}

export default LoginForm
