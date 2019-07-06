import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

interface Props {
  orderProduct: string
  orderId: number
  onClick: (orderProdut: string, orderId: number) => void
  compLabel: string
  delLabel: string
}

const Item = styled.div`
  /* background-color: #cff; */
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

class OrderInfo extends React.Component<Props> {
  handleClick = () => {
    const { orderProduct, orderId, onClick } = this.props
    onClick(orderProduct, orderId)
  }

  render() {
    const { orderProduct, orderId, compLabel, delLabel } = this.props

    return (
      <Item style={{ display: 'flex' }}>
        <div style={{ flex: '1 0 0' }}>
          <p>{orderProduct}</p>
          <p>{orderId}</p>
        </div>
        <Button
          style={{ flex: '0 0 auto', width: 'auto' }}
          color="primary"
          onClick={this.handleClick}
        >
          {compLabel}
        </Button>
        <Button
          style={{ flex: '0 0 auto', width: 'auto' }}
          color="primary"
          onClick={this.handleClick}
        >
          {delLabel}
        </Button>
      </Item>
    )
  }
}

export default OrderInfo
