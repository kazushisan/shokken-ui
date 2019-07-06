import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import OrderInfo from '../components/molecules/OrderInfo'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('OrderInfo', () => {
  const orderProduct = text('orderIroduct', '注文商品名')
  const orderId = number('orderId', 0)
  const compLabel = text('compLabel', '商品完成')
  const delLabel = text('delLabel', '削除')

  return (
    <Wrap>
      <OrderInfo
        orderProduct={orderProduct}
        orderId={orderId}
        compLabel={compLabel}
        delLabel={delLabel}
        onClick={action('send')}
      />
    </Wrap>
  )
})
