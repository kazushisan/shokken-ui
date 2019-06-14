import { configure } from '@storybook/react'

require('../reset.scss')

const req = require.context('../stories', true, /\.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
