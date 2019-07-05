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

const SWIPED_DISTANCE = 150

class OrderInfo extends React.Component<Props> {
  constructor() {
    super()
    this.state = {
      opened: false,
      deltaX: 0
    }
  }

  onPanStart = () => {
    this.setState({
      deltaX: this.getFirstPosition()
    })
  }

  onPan = e => {
    this.setState({
      deltaX: this.getFirstPosition() + e.deltaX
    })
  }

  onPanEnd = e => {
    const { opened } = this.state
    if (opened) {
      if (e.deltaX >= SWIPED_DISTANCE / 2) {
        this.setState({
          opened: false,
          deltaX: 0
        })
      } else {
        this.setState({
          deltaX: this.getFirstPosition()
        })
      }
    } else if (e.deltaX <= -1 * SWIPED_DISTANCE) {
      this.setState({
        opened: true,
        deltaX: -1 * SWIPED_DISTANCE
      })
    } else {
      this.setState({
        deltaX: 0
      })
    }
  }

  getFirstPosition = () => {
    const { opened } = this.state
    return opened ? -1 * SWIPED_DISTANCE : 0
  }

  render() {
    const { orderProduct, orderId } = this.props
    const { deltaX } = this.state
    const style = {
      transform: `translate(${deltaX}px, 0)`
    }
    return (
      <Hammer
        onPanStart={this.onPanStart}
        onPan={this.onPan}
        onPanEnd={this.onPanEnd}
      >
        <Item style={style}>
          <p>{orderProduct}</p>
          <p>{orderId}</p>
        </Item>
      </Hammer>
    )
  }
}

export default OrderInfo
