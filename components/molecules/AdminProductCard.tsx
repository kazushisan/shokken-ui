import React from 'react'
import styled from 'styled-components'

interface Props {
  order: {
    product: string
    price: number
  }
  src: string
  priceUnit: string
  onClick: (product: string, price: number, src: string) => void
}

const Item = styled.div`
  /* background-color: #cff; */
  padding-left: 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

const Img = styled.img`
  width: 15%;
  border-radius: 0 8px 8px 0;
`

class AdminProductCard extends React.Component<Props> {

  handleClick = () => {
    const { onClick, order, src } = this.props
    onClick(order.product, order.price, src)
  }

  render() {
    const { order, src, priceUnit } = this.props

    return (
      <Item
        id="item"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={this.handleClick}
      >
        <div style={{ flex: '1 0 0' }}>
          <p>{order.product}</p>
          <p>
            {order.price}
            {priceUnit}
          </p>
        </div>
        <Img src={src} />
      </Item>
    )
  }
}

export default AdminProductCard
