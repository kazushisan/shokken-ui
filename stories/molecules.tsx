import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'

import OrderInfo from '../components/molecules/OrderInfo'
import OrderConf from '../components/molecules/OrderConf'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('OrderInfo', () => {
  const orderProduct = text('orderIroduct', '注文商品名')
  const orderId = text('orderid', '注文ID')
  return (
    <Wrap>
      <OrderInfo orderProduct={orderProduct} orderId={orderId} />
    </Wrap>
  )
})

stories.add('OrderConf', () => {
  const orderProduct = text('orderProduct', '注文商品名')
  const orderId = text('orderId', '注文ID')
  return (
    <Wrap>
      <OrderConf orderProduct={orderProduct} orderId={orderId} />
    </Wrap>
  )
})
