import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'

import LoginForm from '../components/molecules/LoginForm'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('LoginForm', () => {
  const label = text('Label', 'ログイン')
  const inputName = text('inputName', 'ユーザー名を入力してください')
  const inputPass = text('inputPass', 'パスワードを入力してください')

  return (
    <Wrap>
      <LoginForm
        color="primary"
        inputName={inputName}
        inputPass={inputPass}
        label={label}
        onClick={action('send')}
      />
    </Wrap>
  )
})
