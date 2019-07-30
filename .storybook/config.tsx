import { addDecorator, configure } from '@storybook/react'
import React from 'react'
import GlobalStyle from '../components/GlobalStyle'

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  )
}

addDecorator(withGlobalStyles)

const req = require.context('../stories', true, /\.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
