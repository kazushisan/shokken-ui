import React from 'react'
import styled from 'styled-components'

interface Props {
  order: {
    name: string
    price: number
  }
  src: string
  priceUnit: string
  onClick: (product: string, price: number) => void
}

const Item = styled.div`
  /* background-color: #cff; */
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

class MenuProductCard extends React.Component<Props> {
  handleClick = () => {
    const { order, onClick } = this.props
    onClick(order.name, order.price)
  }

  render() {
    const { src, order, priceUnit } = this.props

    return (
      <Item
        style={{ display: 'flex'}}
        onClick={this.handleClick}
      >
        <div style={{ flex: '1 0 0' ,textAlign: 'center'}}>
         <img src={src} alt={order.name} title={order.name}/>
          <p>{order.name}</p>
          <p>
            {order.price}
            {priceUnit}
          </p>
        </div>
      </Item>
    )
  }
}

export default MenuProductCard
