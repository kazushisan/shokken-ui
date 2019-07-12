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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Img = styled.div`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 100%;
padding-top: 75%
`



class MenuProductCard extends React.Component<Props> {
  handleClick = () => {
    const { order, onClick } = this.props
    onClick(order.name, order.price)
  }

  render() {
    const { src, order, priceUnit, width, height } = this.props

    return (
      <Item
        style={{ display: 'flex', flexDirection: 'column'}}
        onClick={this.handleClick}
      >
        <Img style={{backgroundImage: `url('${src}')`,textAlign: 'center'}}>
        </Img>
        <div style={{ flex: '1 0 0' ,textAlign: 'center', marginTop: 8}}>

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
