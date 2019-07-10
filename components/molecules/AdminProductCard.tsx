import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

interface Props {
  order: {
    product: string
    price: number
  }
  src:string
  priceUnit:string
}

const Item = styled.div`
  /* background-color: #cff; */
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

class AdminProductCard extends React.Component<Props> {

  render() {
    const { order, src, priceUnit } = this.props

    return (
      <Item style={{ display: 'flex' }}>
        <div style={{ flex: '1 0 0' }}>
          <p>{order.product}</p>
          <p>{order.price}{priceUnit}</p>
        </div>
        <img src={src} title={order.product}></img>
      </Item>
    )
  }
}

export default AdminProductCard
