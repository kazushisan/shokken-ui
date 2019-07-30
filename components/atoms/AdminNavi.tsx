import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'

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
  MyPage: ComponentClass
  Orders: ComponentClass
  MyPageImg: string
  OrdersImg: string
}

const AdminNavi = (props: Props) => {
  const { MyPageImg, OrdersImg, MyPage, Orders } = props
  return (
    <BrowserRouter>
      <div>
        <Item>
          <Link to={MyPage}>
            <Img src={MyPageImg} />
          </Link>
          <Link to={Orders}>
            <Img src={OrdersImg} />
          </Link>
        </Item>
      </div>
    </BrowserRouter>
  )
}

export default AdminNavi
