import React from 'react'
import styled from 'styled-components'
import OrderInfo from '../molecules/OrderInfo'

const Item = styled.div`
  margin: 8px;
`
const Box = styled.div`
  overflow: scroll;
`
interface Product {
  name: string
  id: number
}
interface Props {
  products: Product[]
  compLabel: string
  delLabel: string
  onClick: (orderProdut: string, orderId: number) => void
}

class OrderConf extends React.PureComponent<Props> {
  render() {
    const { compLabel, delLabel, products, onClick } = this.props
    return (
      <Box>
        {products.map(x => {
          return (
            <Item>
              <OrderInfo
                orderProduct={x.name}
                orderId={x.id}
                compLabel={compLabel}
                delLabel={delLabel}
                onClick={onClick}
              />
            </Item>
          )
        })}
      </Box>
    )
  }
}

export default OrderConf
