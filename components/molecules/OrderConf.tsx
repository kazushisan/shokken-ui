import React from 'react'
import styled from 'styled-components'
import OrderInfo from '../atoms/OrderInfo.tsx'

const Item = styled.div`
  margin: 8px;
`
const Box = styled.div`
  overflow: scroll;
`

interface Props {}

class OrderConf extends React.Component<Props> {
  render() {
    const { orderProduct, orderId } = this.props
    return (
      <Box>
        <Item>
          <OrderInfo orderProduct={orderProduct} orderId={orderId} />
        </Item>
      </Box>
    )
  }
}

export default OrderConf
