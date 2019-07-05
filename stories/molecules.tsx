import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'

import OrderInfo from '../components/molecules/OrderInfo'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('OrderInfo', () => {
  const orderProduct = text('orderIroduct', '注文商品名')
  const orderId = text('orderid', '注文ID')
  const label = text('label', '商品完成')
  return (
    <Wrap>
      <OrderInfo
        orderProduct={orderProduct}
        orderId={orderId}
        label={label}
        onClick={action('send')}
      />
    </Wrap>
  )
})
