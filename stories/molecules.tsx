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
  const form1 = text('form1', 'ユーザー名を入力してください')
  const form2 = text('form2', 'パスワードを入力してください')
  return (
    <Wrap>
      <LoginForm
        color="primary"
        form1={form1}
        form2={form2}
        label={label}
      />
    </Wrap>
  )
})
