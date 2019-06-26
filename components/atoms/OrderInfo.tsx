import React from 'react'
import styled from 'styled-components'

interface Props {
  orderproduct: string
  orderid: string
}

const Item = styled.div`
  background-color: #cff;
  padding: 12px 16px;
  box-shadow: 2px 2px 4px gray;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

class OrderInfo extends React.Component<Props> {
  render() {
    const { orderproduct, orderid } = this.props
    return (
      <Item>
        <p>{orderproduct}</p>
        <p>{orderid}</p>
      </Item>
    )
  }
}

export default OrderInfo
