import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import LoginForm from '../components/molecules/LoginForm'
import UserOrderCard from '../components/molecules/UserOrderCard'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('LoginForm', () => {
  const label = text('Label', 'ログイン')

  const placeholder = {
    name: text('placeholder.name', 'ユーザー名を入力してください'),
    pass: text('placeholder.pass', 'パスワードを入力してください')
  }

  return (
    <Wrap>
      <LoginForm
        placeholder={placeholder}
        label={label}
        onClick={action('send')}
      />
    </Wrap>
  )
})

stories.add('UserOrderCard', () => {
  const id = number('Id', 0)
  return (
    <Wrap>
      <UserOrderCard id={id} onClick={action('send')} />
    </Wrap>
  )
})
