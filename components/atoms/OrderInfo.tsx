import React from 'react'
import styled from 'styled-components'
import Hammer from 'react-hammerjs'

interface Props {
  orderproduct: string
  orderid: string
}

const Item = styled.div`
  /* background-color: #cff; */
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  font-size: inherit;
`

class OrderInfo extends React.Component<Props> {

  constructor() {
    super(...arguments)
    this.state = {
      opened : false,
      deltaX : 0
    }
  }

  getFirstPosition() {
    return this.state.opened ? -1 * SWIPED_DISTANCE : 0
  }

  onPanStart(e) {
    this.setState({
      deltaX : this.getFirstPosition()
    })
  }

  onPan(e) {
    this.setState({
      deltaX : this.getFirstPosition() + e.deltaX
    })
  }

  onPanEnd(e) {
    if(this.state.opend) {
      if(e.deltaX >= SWIPED_DISTANCE / 2) {
        this.setState({
          opened : false,
          deltaX : 0
        })
      }else {
        this.setState({
          deltaX : this.getFirstPosition()
        })
      }
    }else {
      if(e.deltaX <= -1 * SWIPED_DISTANCE){
      this.setState({
        opened : true,
        deltaX : -1 * SWIPED_DISTANCE
      })
      }else {
        this.setState({
          deltaX : 0
        })
      }
    }
  }

  render() {
    const { orderproduct, orderid } = this.props
    let style = {
      transform : `translate(${this.state.deltaX}px, 0)`
    }
    return (
      <Hammer
        onPanStart={this.onPanStart.bind(this)}
        onPan={this.onPan.bind(this)}
        onPanEnd={this.onPanEnd.bind(this)}
      >
        <Item style={style}> 
          <p>{orderproduct}</p>
          <p>{orderid}</p>
        </Item>
      </Hammer>
    )
  }
}

export default OrderInfo
