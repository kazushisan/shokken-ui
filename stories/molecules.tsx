import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import AdminOrderCard from '../components/molecules/AdminOrderCard'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('AdminOrderCard', () => {
  const orderProduct = text('orderProduct', '注文商品名')
  const orderId = number('orderId', 0)
  const compLabel = text('compLabel', '商品完成')
  const delLabel = text('delLabel', '削除')

  const order = {
    product: orderProduct,
    id: orderId
  }

  const label = {
    complete: compLabel,
    delete: delLabel
  }

  return (
    <Wrap>
      <AdminOrderCard order={order} label={label} onClick={action('send')} />
    </Wrap>
  )
})
