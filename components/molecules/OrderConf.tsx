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
    const { orderproduct, orderid } = this.props
    return (
      <div>
        <Box>
          <Item>
            <OrderInfo
              orderproduct={orderproduct}
              orderid={orderid}
            />
          </Item>
        </Box>
      </div>
    )
  }
}

export default OrderConf
