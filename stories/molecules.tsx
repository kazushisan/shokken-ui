import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import LoginForm from '../components/molecules/LoginForm'
import AdminProductCard from '../components/molecules/AdminProductCard'
import AdminOrderCard from '../components/molecules/AdminOrderCard'

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
    price: number('price', 0)
  }
  const src = text(
    'src',
    'http://www.at-s.com/gourmet/featured/ramen/2019/images/125760.jpg'
  )
  const priceUnit = text('priceUnit', '円')

  return (
    <Wrap>
      <AdminProductCard
        order={order}
        src={src}
        priceUnit={priceUnit}
        onClick={action('send')}
      />
    </Wrap>
  )
})

stories.add('AdminOrderCard', () => {
  const orderProduct = text('orderName', '注文商品名')
  const orderId = number('orderId', 0)
  const compLabel = text('compLabel', '商品完成')
  const delLabel = text('delLabel', '削除')

  const order = {
    name: orderProduct,
    id: orderId
  }

  const label = {
    complete: compLabel,
    delete: delLabel
  }

  return (
    <Wrap>
      <AdminOrderCard
        order={order}
        label={label}
        onComplete={action('complete')}
        onDelete={action('delete')}
      />
    </Wrap>
  )
})
