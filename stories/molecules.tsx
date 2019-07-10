import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'

import LoginForm from '../components/molecules/LoginForm'
import AdminProductCard from '../components/molecules/AdminProductCard'

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

stories.add('AdminProductCard', () => {
  const order = {
    product: text('product', '商品名'),
    price: text('price', '0')
  }
  const src = text('src', 'src')
  const priceUnit = text('priceUnit', '円')

  return (
    <Wrap>
      <AdminProductCard
        order={order}
        src={src}
        priceUnit={priceUnit}
      />
    </Wrap>
  )
})
