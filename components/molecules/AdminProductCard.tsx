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
  padding-left: 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

const Img = styled.div`
  background-size: cover;
  width: 20%;
  padding-top: 15%;
  border-radius: 0 8px 8px 0;
`

class AdminProductCard extends React.Component<Props> {

  render() {
    const { order, src, priceUnit } = this.props

    return (
      <Item style={{ display: 'flex', alignItems:'center'}}>
        <div style={{ flex: '1 0 0'}}>
          <p>{order.product}</p>
          <p>{order.price}{priceUnit}</p>
        </div>
        <Img style={{backgroundImage: `url('${src}')`}}></Img>
      </Item>
    )
  }
}

export default AdminProductCard
