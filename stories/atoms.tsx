import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import AdminNavi from '../components/atoms/AdminNavi'

const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('atoms', module)
stories.addDecorator(withKnobs)

stories.add('Button', () => {
  const label = text('Label', 'ボタンのラベル')
  return (
    <Wrap>
      <Button color="primary" onClick={action('clicked')}>
        {label}
      </Button>
    </Wrap>
  )
})

stories.add('Input', () => {
  return (
    <Wrap>
      <Input color="primary" placeholder="入力してください..." />
    </Wrap>
  )
})

stories.add('AdminNavi', () => {
  const MyPage = text('MyPage', 'MyPage')
  const Orders = text('Orders', 'Orders')
  const MyPageImg = text(
    'MyPageImg',
    'http://icooon-mono.com/i/icon_12121/icon_121211_64.png'
  )
  const OrdersImg = text(
    'OrdersImg',
    'http://icooon-mono.com/i/icon_12042/icon_120421_64.png'
  )
  return (
    <Wrap>
      <AdminNavi
        MyPage={MyPage}
        Orders={Orders}
        MyPageImg={MyPageImg}
        OrdersImg={OrdersImg}
      />
    </Wrap>
  )
})

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ))

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ))
