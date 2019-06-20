import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  `

const Tytle = styled.p`
  font-size: 20px;
  `

interface Props {
  form1: string
  form2: string
  label: string
}

class LoginForm extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = { name: '', pass: '' }

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id] : value
    });
  }

  onClick(event) {

  }

  render() {
    return (
      <Container>
        <Tytle>Login</Tytle>
        <Input id="name" color="primary" placeholder={this.props.inputName} onChange={this.handleChange}/>
        <Input id="pass" color="primary" placeholder={this.props.inputPass} onChange={this.handleChange}/>
        <Button color="primary" onClick={this.onClick}>
          {this.props.label}
        </Button>
        {this.state.name}
        {this.state.pass}
      </Container>
    )
  }
}

export default LoginForm
