import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import OrderInfo from '../components/atoms/OrderInfo'

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

stories.add('OrderInfo', () => {
  const orderproduct = text('orderproduct', '注文商品名')
  const orderid = text('orderid', '注文ID')
  return (
    <Wrap>
      <OrderInfo orderproduct={orderproduct} orderid={orderid} />
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
