import React from 'react'
import styled from 'styled-components'
import OrderInfo from '../molecules/OrderInfo.tsx'
import { action } from '@storybook/addon-actions'

const Item = styled.div`
  margin: 8px;
`
const Box = styled.div`
  overflow: scroll;
`

interface Props {}

class OrderConf extends React.Component<Props> {
  render() {
    const { orderProduct, orderId, label, handleClick } = this.props
    return (
      <Box>
        <Item>
          <OrderInfo
            orderProduct={orderProduct}
            orderId={orderId}
            label={label}
            onClick={action('send')}
          />
        </Item>
      </Box>
    )
  }
}

export default OrderConf
