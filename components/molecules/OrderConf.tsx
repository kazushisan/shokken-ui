import React from 'react'
import styled from 'styled-components'
import OrderInfo from '../atoms/OrderInfo.tsx'

const Item = styled.div`
  margin: 8px;
`

interface Props {}

class OrderConf extends React.Component<Props> {
  render() {
    const {
      amount,
      orderproduct1,
      orderid1,
      orderprocudt2,
      orderid2
    } = this.props
    return (
      <div>
        <Item>
          <OrderInfo orderproduct1={orderproduct1} orderid1={orderid1} />
        </Item>
        <Item>
          <OrderInfo orderproduct2={orderproduct2} orderid2={orderid2} />
        </Item>
      </div>
    )
  }
}

export default OrderConf
