import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, array } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'


const Wrap = styled.div`
  margin: 20px;
`
const stories = storiesOf('organisms', module)
stories.addDecorator(withKnobs)
