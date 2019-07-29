import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Item = styled.div`
  padding: 12px 16px;
  margin: 8px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  border-radius: 4px;
`

const Img = styled.img`
  margin: 8px;

  &:active {
    opacity: 0.4;
  }
`

interface Props {
  Edit: ComponentClass
  Order: ComponentClass
  EditImg: string
  OrderImg: string
}

const AdminNavi = (props: Props) => {
  const { Edit, Order, EditImg, OrderImg } = props
  return (
    <BrowserRouter>
      <div>
        <Item>
          <Link to="/edit">
            <Img style={{ margin: 8 }} src={EditImg} />
          </Link>
          <Link to="/order">
            <Img style={{ margin: 8 }} src={OrderImg} />
          </Link>
        </Item>

        <Route exact path="/edit" component={Edit} />
        <Route path="/order" component={Order} />
      </div>
    </BrowserRouter>
  )
}

export default AdminNavi
