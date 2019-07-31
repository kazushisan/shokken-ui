import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import LoginForm from '../components/molecules/LoginForm'
import ProductCard from '../components/molecules/ProductCard'
import OrderCard from '../components/molecules/OrderCard'
import QueueCard from '../components/molecules/QueueCard'

const Wrap = styled.div`
  margin: 20px;
`

const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('LoginForm', () => {
  const label = text('Label', 'ログイン')

  const placeholder = {
    name: text('placeholder.name', 'ユーザー名を入力してください'),
    password: text('placeholder.password', 'パスワードを入力してください')
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

stories.add('ProductCard', () => {
  const src = text(
    'src',
    'http://www.at-s.com/gourmet/featured/ramen/2019/images/125760.jpg'
  )

  return (
    <Wrap>
      <ProductCard
        src={src}
        onClick={action('send')}
      >
        商品名と値段
      </ProductCard>
    </Wrap>
  )
})

stories.add('OrderCard', () => {
  return (
    <Wrap>
      <OrderCard
        add={action('add')}
        substract={action('substract')}
      >
        商品名と金額
      </OrderCard>
    </Wrap>
  )
})

stories.add('QueueCard', () => {
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
      <QueueCard
        order={order}
        label={label}
        onComplete={action('complete')}
        onDelete={action('delete')}
      />
    </Wrap>
  )
})
