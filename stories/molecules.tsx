import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'

import OrderConf from '../components/molecules/OrderConf'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('OrderConf', () => {
  const orderproduct = text('orderproduct', '注文商品名')
  const orderid = text('orderid', '注文ID')
  return (
    <Wrap>
      <OrderConf orderproduct={orderproduct} orderid={orderid} />
    </Wrap>
  )
})
